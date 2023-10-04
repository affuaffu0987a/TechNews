import React from "react"
import { useGlobalContext } from "../context"
import Loader from "./Loader"

const Newdetails = () => {
    const{hits,isload,RemoveNew}=useGlobalContext()
    console.log(hits);
    return (
        <>
        {isload?<Loader/>:null}
        <div className="maindiv">
        {
            hits.map((elem,ind)=>{
                return(
                    <div className="innerdiv" key={elem.objectID}>
                    <h3 >{elem.title}</h3>
                    <span>By {elem.author} </span> | <span> {elem.num_comments} </span>comments
                    <div className="btns">
                    <button><a href={elem.url}>Read More</a></button>
                    <button className="remove" onClick={()=>RemoveNew(elem.objectID)}>Remove</button>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Newdetails