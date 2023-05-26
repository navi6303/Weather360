import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';
import TemperatureamdDetails from './components/TemperatureamdDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';


function App() {

  const [query, setQuery] = useState({ q: "Mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async() => {
      await getFormattedWeatherData({...query, units}).then(data =>
        {
          setWeather(data);
        })
      
    };
  
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-sky-600";
    const threshold = units === "metric" ? 25 : 80;
    if (weather.temp <= threshold) return "bg-sky-600";

    return "bg-yellow-500";
  }; 

  return (
    <div
    className={`mx-auto  py-5 px-32 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
  >
    <TopButtons setQuery={setQuery} />
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

    {weather &&(
      <div>
        <TimeandLocation weather={weather}/>
        <TemperatureamdDetails weather={weather}/>

        <Forecast title="Hourly Forecast" items={weather.hourly}/>
        <Forecast title="Daily Forecast" items={weather.daily}/>
      </div>
    )}

  </div>
  );
}

export default App;
