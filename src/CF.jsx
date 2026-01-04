export default function CF({unit,setUnit}){
    return(
        <div style={{position:"absolute",right:"25px",top:"15px",display:"inline-block"}} >
            <span>°C</span>
            <input style={{width:"38px",height:"44px"}} type="range" min="0" max="1" value={unit} onChange={(event)=>setUnit(Number(event.target.value))}/>
            <span>°F</span>
        </div>
    )
} 