import { useState, useEffect } from "react";
import { getForecast } from "../services/weatherApi";
import WeekForecast from "../components/WeekForecast";
import CurrentWeather from "../components/CurrentWeather";
import ContentLayout from "../components/ContentLayout";
import Loading from "../components/Loading";

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

  if (!data)
    return (
      <ContentLayout>
        <Loading />
      </ContentLayout>
    );

  const {
    currentTemp,
    status,
    minTemp,
    maxTemp,
    city,
    country,
    date,
    weekForecast,
  } = data;

  return (
    <ContentLayout>
      <>
        <CurrentWeather
          date={date}
          city={city}
          country={country}
          minTemp={minTemp}
          maxTemp={maxTemp}
          currentTemp={currentTemp}
          status={status}
        />
        <WeekForecast weekForecast={weekForecast} />
      </>
    </ContentLayout>
  );
}
