import { useState } from "react";
export default function Form({onSearch,cities}){

    const [city,setCity]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!city.trim()) return;
        onSearch(city);
        setCity("")
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input style={{width:"150px",height:"20px", border:"1px",marginTop:"10px",color:"darkblack"}} type="text" placeholder="Enter city" value={city} list="cityList" onChange={(event)=>setCity(event.target.value)}/>
            <datalist id="cityList">
                {cities.map((c,i)=>(
                    <option key={i} value={c}/>
                ))}
            </datalist>
            <br /><br />
            <button style={{width:"100px",height:"20px",border:"1px"}} type="submit">Submit</button>
            </form>
        </div>
    )
}



