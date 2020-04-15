const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a25c4cb7e35a90cff3e62674d98ca37a&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}