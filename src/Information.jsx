import FeelsLike from "./FeelsLike";
import Hours from "./Hours";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import SeaLevel from "./SeaLevel";
import Wind from "./Wind";
import GroundLevel from "./GroundLevel";

export default function Information({weather,unit}){
    if (!weather) return <p>Loading...</p>;

    return(
        <div style={{backgroundColor:"#B9D9EB",height:"750px",width:"800px", border:"1px",position:"absolute",left:"580px",right:"20px",top:"80px",bottom:"80px", borderRadius:"25px"}}>

            <h1 style={{marginLeft:"30px"}}>Welcome back Garbita!</h1>
            <h3 style={{marginLeft:"30px"}}>Check out today's weather information</h3>
            <Hours/>


            <h1 style={{marginLeft:"25px"}}>More details of today's weather</h1>
            <Humidity humidity={weather.main.humidity}/>
            <Wind wind_speed={weather.wind.speed}/>
            <Pressure pressure={weather.main.pressure}/>
            <GroundLevel grnd_level={weather.main.grnd_level}/>
            <FeelsLike feels_like={weather.main.feels_like} unit={unit}/>
            <SeaLevel sea_level={weather.main.sea_level}/> 

        </div>
    )
}
