export default function DateComp(){
    const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();
  const monthName = today.toLocaleString("en-US", { month: "long" });

    
    return(
        <div style={{position:"absolute",top:"220px",left:"25px"}}>
            <h3 style={{color:"white"}}>Today {day} {monthName} {year}</h3>
        </div>
    )
}

