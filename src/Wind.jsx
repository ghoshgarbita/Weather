export default function Wind({wind_speed}){
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block"}}>
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Wind</h3>
            <img  style={{height:"20px", width:"20px", position:"absolute", top: "420px", right:"370px"}} src="/wind.png" />
            
            <h3 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{wind_speed}km/h</h3>
        </div>
    )
}