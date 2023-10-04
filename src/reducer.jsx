const reducer=(state,action)=>{
    switch (action.type) {
        case "GET_TECHNEWS":
            return{
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isload:false
            };
        case "REMOVE_NEWS":
            return{
                ...state,
                hits: state.hits.filter((elem,index)=>{
                   return elem.objectID !== action.payload
                })

            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload
            }
        case "PRIVIOUS_PAGE":
            return{
                ...state,
                page: state.page-1
            }
        case "NEXT_PAGE":
            return{
                ...state,
                page: state.page+1
            }

    }
    return state;
}

export default reducer;