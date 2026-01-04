//import humidityIcon from "../assets/humidity.png";

export default function Humidity({humidity}){
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block"}}>
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Humidity</h3>
            <img  style={{height:"20px", width:"20px", position:"absolute", top: "420px", right:"600px"}} src="/humidity.png" />
            <h3 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{humidity}%</h3>
            
        </div>
    )
}