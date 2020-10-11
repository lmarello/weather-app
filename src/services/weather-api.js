import axios from "axios";
import { weatherStateConverter } from "./weather-state-converter";
import convertUnits from "convert-units";
import moment from "moment";
import "moment/locale/es";

const API_KEY = "";
const API_URL = "https://api.openweathermap.org/data/2.5";

const kelvinToCelcius = (temperaure) =>
    parseInt(convertUnits(temperaure).from("K").to("C"));

const getWeather = async (city, countryCode, cityKey) => {
    const url = `${API_URL}/weather?q=${city},${countryCode}&appid=${API_KEY}`;
    const response = await axios.get(url);
    const { data } = response;

    console.log(
        `%c Consultando weather: ${city}`,
        "background: #222; color: #bada55"
    );

    return {
        cityKey,
        temperature: kelvinToCelcius(data.main.temp),
        state: weatherStateConverter(data.weather[0].main),
    };
};

const getForecast = async (city, countryCode, cityKey) => {
    const url = `${API_URL}/forecast?q=${city},${countryCode}&appid=${API_KEY}`;
    const response = await axios.get(url);

    console.log(
        `%c Consultando forecast: ${city}`,
        "background: #222; color: #bada55"
    );

    const data = [0, 1, 2, 3, 4, 5]
        .map((day) => moment().add(day, "d"))
        .map((day) => {
            const items = response.data.list.filter(
                (item) => moment.unix(item.dt).dayOfYear() === day.dayOfYear()
            );

            const tempsMax = items.map((x) => x.main.temp_max);
            const tempsMin = items.map((x) => x.main.temp_min);

            const max = kelvinToCelcius(Math.max(...tempsMax));
            const min = kelvinToCelcius(Math.min(...tempsMin));

            return {
                weekday: day.format("ddd"),
                min,
                max,
            };
        });

    const interval = [4, 8, 12, 16, 20, 24];

    debugger;
    
    const forecast = response.data.list
        .filter((item, index) => interval.includes(index))
        .map((item) => ({
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format("ddd"),
            state: item.weather[0].main.toLowerCase(),
            temperature: kelvinToCelcius(item.main.temp),
        }));

    return { data, forecast };
};

export const weatherApi = {
    getForecast: getForecast,
    getWeather: getWeather,
};
