export default function CurrentTime(){
    const now = new Date();

    const time = now.toLocaleTimeString("en-us",{
        hour:"numeric",
        minute:"2-digit",
        hour12:true,
    });
    return(
        <div style={{marginLeft:"300px"}}>
            <h3 style={{color:"white"}}>{time}</h3>
        </div>
    )
}