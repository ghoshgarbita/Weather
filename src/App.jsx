import { useEffect, useState } from "react";
import Data from "./Data";
import Information from "./Information";

export default function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const[unit,setUnit]=useState(0);

  const fetchWeather = async(city)=>{
    
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) {
      setWeather(data)
    }
    
    if(!cities.includes(city)){
      const newCities= [...cities,city];
      setCities(newCities);
      localStorage.setItem("cities",JSON.stringify(newCities))
    }
  
  };

  useEffect(()=>{
    const savedCities = JSON.parse(localStorage.getItem("cities")) || []
    setCities(savedCities);
    fetchWeather("Kolkata")
  },[]);

  return (
    <div style={{ backgroundColor: "skyblue", width: "1500px", height: "900px" }}>

      <Data weather={weather} onSearch={fetchWeather} cities={cities} unit={unit} setUnit={setUnit}/> 
      <Information weather={weather} unit={unit}/>
    </div>
  );
}
