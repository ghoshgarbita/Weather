export default function FeelsLike({feels_like,unit}){
    const displayTemp = unit === 0 ? feels_like : (feels_like*9) / 5+32;
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block"}}>
            <img  style={{height:"20px", width:"20px", position:"absolute", top: "570px", right:"370px"}} src="/feelslike.png" />
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Feels Like</h3>
            <h3 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{Math.round(displayTemp)}°
      {unit === 0 ? "C" : "F"}</h3> 
        </div>
    )
}