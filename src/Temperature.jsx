export default function Temperature({temp,unit}){
    const displayTemp =
    unit === 0 ? temp : (temp * 9) / 5+32;

    return(
        <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
            <h1 style={{color:"white"}}>{Math.round(displayTemp)}° {unit === 0 ? "C" : "F"} </h1>
        </div>
    )
}