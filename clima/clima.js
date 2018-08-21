const axios = require('axios');

const getClima = async(lat, lng) => {

    let latUrl = encodeURI(lat);
    let lngUrl = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latUrl }&lon=${ lngUrl }&units=metric&appid=823dcd5d40734cdf521e6fd6baa78efc`);


    if (resp.statusText != "OK") {
        throw new Error(`No hay resultados de temperatura`);
    }

    let valor = resp.data.main.temp;

    return {
        temperatura: valor
    }
}

module.exports = {
    getClima
}