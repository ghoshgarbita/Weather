import Button from "./Button";
import CF from "./CF";
import CurrentTime from "./CurrentTime";
import Datecomp from "./Datecomp";
import Place from "./Place";
import Temperature from "./Temperature";
import TimeOfThatPlace from "./TimeOfThatPlace";

export default function Data({weather,onSearch,cities,unit,setUnit}){
    
    return(
        <div style={{backgroundColor:"#6495ED",width:"400px",height:"750px",marginLeft:"170px",border:"1px", position:"absolute" ,top:"80px",bottom:"80px",borderRadius:"25px"}}>
        

        <Button onSearch={onSearch} cities={cities}/>

        {weather &&(
            <>
        <CF unit={unit} setUnit={setUnit}/>

        <Place place={weather.name}/> 
        <CurrentTime/>

        <Datecomp/>
        <TimeOfThatPlace dt={weather.dt} timezone={weather.timezone}/>
     

        <Temperature temp={weather.main.temp} unit={unit}/>
        </>
        )}

        <img src="https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg" style={{width:"400px",height:"390px",border:"1px",borderRadius:"25px"}}/>
         
        </div>
    )
}