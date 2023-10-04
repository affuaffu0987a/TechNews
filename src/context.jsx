import React, { createContext, useContext,useEffect, useReducer } from "react";
import reducer from "./reducer";

let UrlApi = "http://hn.algolia.com/api/v1/search?"
const AppContext = createContext();

const initialState={
    isload:true,
    query:"",
    page:0,
    nbPages:0,
    hits:[]
}

const AppProvider =({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const AllDetails = async (api) => {
        try{
        let response = await fetch(api);
        let data = await response.json();
        console.log(data);
        dispatch({
            type:"GET_TECHNEWS",
            payload:{
                hits: data.hits,
                nbPages:data.nbPages,
            }
        })
        }
        catch(error){
            console.log(error);
        }
    }

    const RemoveNew=(newId)=>{
        dispatch({
            type:"REMOVE_NEWS",
            payload: newId
        })
    }

    const SearchNews=(queryname)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:queryname
        })
    }

    const Privious=()=>{
        dispatch({
            type:"PRIVIOUS_PAGE",
        })
    }
    const Next=()=>{
        dispatch({
            type:"NEXT_PAGE",
        })
    }

    useEffect(() => {
        AllDetails(`${UrlApi}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page]);
    return(
        <>
        <AppContext.Provider value={{...state,RemoveNew,SearchNews,Privious,Next}} >
            {children}
        </AppContext.Provider>
        </>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {useGlobalContext,AppProvider};