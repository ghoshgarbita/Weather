export default function SeaLevel({sea_level}){
    return(
        <div style={{backgroundColor:"white",border:"1px",borderRadius:"25px",width:"200px",height:"120px",marginLeft:"25px",display:"inline-block",marginTop:"25px"}}>
            <h3 style={{marginLeft:"30px",marginTop:"20px"}}>Sea Level</h3>
            <img  style={{height:"20px", width:"20px", position:"absolute", top: "570px", right:"150px"}} src="/sea-level.png" />
            <h3 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{sea_level} hPa</h3>
        </div>
    )
}