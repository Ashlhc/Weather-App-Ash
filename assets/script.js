var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.6062&lon=122.3321&appid=8d95eef109d423165de3e03e02d4d24d'

var cityInputEl = document.querySelector('#cityName')
var submitBtnEl = document.querySelector('.btn')


function getWeatherData(event){
    event.preventDefault()

    console.log(cityInputEl.value)
}

submitBtnEl.addEventListener('click', getWeatherData)

var ""Url = 'api Url goes here'

