import { getDate, getWeekDayFromDatetime } from "../../services/datetime";

const API_BASE_URL = "https://www.metaweather.com/api/location";

export default async function getForecast(req, res) {
  try {
    const { cityId } = req.query;

    const url = `${API_BASE_URL}/${cityId}/`;

    const response = await fetch(url);

    const {
      title: city,
      parent: { title: country },
      time: datetime,
      consolidated_weather: consolidatedWeather,
    } = await response.json();

    const {
      weather_state_name: status,
      min_temp: minTemp,
      max_temp: maxTemp,
      the_temp: currentTemp,
      wind_speed: windSpeed,
      humidity: humidity,
      air_pressure: airPressure,
    } = consolidatedWeather[0];

    const todayForecast = {
      status,
      minTemp: minTemp.toFixed(),
      maxTemp: maxTemp.toFixed(),
      currentTemp: currentTemp.toFixed(),
      windSpeed,
      humidity,
      airPressure,
    };

    const weekForecast = [];

    for (let index = 1; index < consolidatedWeather.length; index++) {
      const { weather_state_name, min_temp, max_temp, applicable_date } =
        consolidatedWeather[index];

      const [year, month, day] = applicable_date.split("-");

      const weekDay = getWeekDayFromDatetime(
        new Date(year, month - 1, day)
      ).substring(0, 3);

      const forecast = {
        status: weather_state_name,
        minTemp: min_temp.toFixed(),
        maxTemp: max_temp.toFixed(),
        weekDay,
      };

      weekForecast.push(forecast);
    }

    const data = {
      city,
      country,
      date: getDate(datetime),
      ...todayForecast,
      weekForecast: [...weekForecast],
    };

    res.status(200).json({ ok: true, data });
  } catch (error) {
    res.status(400).json({ ok: false, data: [] });
  }
}
