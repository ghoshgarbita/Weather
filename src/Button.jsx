import Form from "./Form";
import { useState } from "react";

export default function Button({onSearch,cities}){
    const [showForm,setShowForm]=useState(false);

    const handleForm=()=>{
        setShowForm(true)
    }
    return(
        <div style={{backgroundColor:"white",width:"20px",height:"20px",border:"1px",borderRadius:"25%",marginLeft:"25px", marginTop:"35px",display:"inline-block"}}>
            <button onClick={handleForm} style={{border:"1px",borderRadius:"25px"}}>+</button>

        {showForm && <Form onSearch={onSearch} cities={cities}/>}
        </div>
    )
}