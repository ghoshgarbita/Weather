export default function Pressure({pressure}){
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block"}}>
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Pressure</h3>
            <img  style={{height:"25px", width:"25px", position:"absolute", top: "420px", right:"145px"}} src="/pressure.png" />
            
            <h3 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{pressure} hPa</h3>
        </div>
    )
}