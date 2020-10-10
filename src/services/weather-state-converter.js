export const weatherStateConverter = (state) => {
    const dictionary = {
        Thunderstorm: "thunderstorm", // tormenta WiThunderstorm
        Drizzle: "drizzle", // llovizna WiShowers
        Rain: "rain", // lluvia WiRain
        Snow: "snow", // nieve WiSnow
        Atmosphere: "atmosphere", // niebla WiFog
        Clear: "clear", // despejado WiDaySunny
        Clouds: "cloud", // nublado WiCloudy
    };

    return dictionary[state];
};
