const key = 'y4gqAZHCWABziwBXkTXFzUQ60EAkvzHy';//apikey form accuweather

//get weather information
const getWeather = async (cityId) => {

    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityId}?apikey=${key}`;

    const response =  await fetch(base + query);
    const data = await response.json();

   return(data[0]);

}
//get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return(data[0]);

}

getCity('Bulacan').then(data => {
    return getWeather(data.Key);
}).then(data => {
    return(data);
}).catch(err => console.log(err));

