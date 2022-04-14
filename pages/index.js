import { useState, useEffect } from "react";
import { getForecast } from "../services/weatherApi";
import WeatherIcon from "../components/WeatherIcon";

const BS_AS_CITY_ID = 468739;

export default function Home() {
  const [data, setData] = useState(null);
  const [cityId, setCityId] = useState(BS_AS_CITY_ID);

  useEffect(() => {
    async function fetchForecast() {
      const response = await getForecast(cityId);
      setData(response);
    }
    fetchForecast();
  }, [cityId]);

  if (!data) return <div>NO DATA </div>;

  const {
    currentTemp,
    status,
    minTemp,
    maxTemp,
    humidity,
    windSpeed,
    airPressure,
    city,
    country,
    date,
    weekForecast,
  } = data;

  return (
    <div className="grid h-screen">
      <div className="w-full grid place-content-center">
        <div className="bg-glass text-white h-[600px] w-[400px] text-center py-10 px-2">
          <span>{date}</span>
          <h1 className="text-2xl font-semibold">{`${city}, ${country}`}</h1>
          <div className="my-8 opacity-[0.8]">
            <WeatherIcon size={90} status={status} />
          </div>
          <h1 className="text-2xl">{status}</h1>
          <h1 className="text-6xl">{currentTemp}°C</h1>
          <h1 className="text-xs mt-2">{`MIN.: ${minTemp}°C - MAX.: ${maxTemp}°C`}</h1>
          <div className="bg-glass-card text-white h-[150px] w-[300px] text-left mx-auto mt-10 p-4">
            {weekForecast.map((forecast) => {
              const { status, minTemp, maxTemp, weekDay } = forecast;

              return (
                <div
                  key={weekDay}
                  className="flex justify-between text-sm py-[2px] text-gray-400"
                >
                  <div className="w-[10px]">{weekDay}</div>
                  <div className="w-[20px] text-center">
                    <WeatherIcon size={12} status={status} />
                  </div>
                  <div>{`min.: ${minTemp}°C - max.: ${maxTemp}°C`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
