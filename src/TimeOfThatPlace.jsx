export default function TimeOfThatPlace({dt,timezone}){
    const localDate = new Date((dt + timezone) * 1000);

  let hours = localDate.getUTCHours();
  const minutes = localDate.getUTCMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
    
    
    return(
        <div style={{marginLeft:"300px"}}>
            <h3 style={{color:"white"}}>{hours}:{String(minutes).padStart(2, "0")} {ampm}</h3>
        </div>
    )
}