const request = require('request')

const forecast = (latitude, longitude, temperature, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0da40492c665bb632e96dce240982210&query=${latitude},${longitude}&units=${temperature}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(
            undefined,
            body.current.weather_descriptions[0] + `, It is currently ${body.current.temperature}°. There is a ${body.current.precip}% chance of rain. Enjoy your day!`
        );
        }
    });
}

module.exports = forecast