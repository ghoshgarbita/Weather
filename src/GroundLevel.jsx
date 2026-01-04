export default function GroundLevel({grnd_level}){
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block"}}>
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Ground level</h3>
            <img  style={{height:"20px", width:"20px", position:"absolute", top: "570px", right:"600px"}} src="/groundlevel.png" />
            <h3 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{grnd_level} hPa</h3>
        </div>
    )
}