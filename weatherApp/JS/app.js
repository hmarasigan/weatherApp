const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // const cityDest = data.cityDest;
    // const weather = data.weather;

    //destructuring properties
    const {cityDest, weather} = data;

    //update details
    details.innerHTML = 
        `<h5 class="my-3">${cityDest.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="diplay-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>`;

        //update the night/day and icon images
        const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
        icon.setAttribute('src', iconSource);


        let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
        time.setAttribute('src',timeSrc);
        // if(weather.IsDayTime){
        //     timeSrc = 'img/day.svg';
        // } else {
        //     timeSrc = 'img/night.svg';
        // }
        

        //remove the d-none class if prersent
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
}

const updateCity = async (city) =>{
   
    const cityDest = await getCity(city);
    const weather = await getWeather(cityDest.Key);

    return {cityDest, weather};

}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //get city Value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})