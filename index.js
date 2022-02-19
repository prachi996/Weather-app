 
const whetherApi={
  key:'5BFWNB2SNLS8GDKN6WUNR6JTA',

}
let container=document.getElementById('container');
let cityName=document.getElementById('cityName');
let date=document.getElementById('date');
let temprature=document.getElementById('temprature');
let minTemp=document.getElementById('minTemp');
let maxTemp=document.getElementById('maxTemp');
let atm=document.getElementById('atm');
let ip=document.getElementById('search')
cityName.style.textTransform.toUpperCase
ip.addEventListener('keypress',(event)=>{
  if(event.keyCode==13){
    event.preventDefault()
    wetherReport(ip.value)
  }
})

function wetherReport(city){
  url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5BFWNB2SNLS8GDKN6WUNR6JTA `
  fetch(url).then(whether=> {
    return whether.json()
  }).then(showReport)
}

function showReport(whether){
  temprature.innerHTML=`${whether.currentConditions.temp} &deg F`;
  minTemp.innerHTML=`${whether.days[0].tempmin} &deg F/`
  maxTemp.innerHTML=`${whether.days[0].tempmax} &deg F`
  cityName.innerHTML=`${whether.address}`
  date.innerHTML=`${whether.days[0].datetime}`
  atm.innerHTML=`${whether.currentConditions.conditions}`
  if (whether.currentConditions.conditions=='Clear') {
    container.style.backgroundImage="url('https://cdn.wallpapersafari.com/97/36/kEDv3x.jpg')"
  }
  else if(whether.currentConditions.conditions=='Partially cloudy'){
    container.style.backgroundImage="url('https://t3.ftcdn.net/jpg/01/21/56/56/360_F_121565685_4fxNhaEWDazyS1PHoIFsqrLMOynl0fvu.jpg')"
  }
  else if(whether.currentConditions.conditions=='Overcast'){
    container.style.backgroundImage="url('https://www.somersetcountygazette.co.uk/resources/images/4216738.jpg?display=1&htype=0&type=responsive-gallery')"
  }
  else{
    container.style.backgroundImage="url('https://www.thoughtco.com/thmb/8DglliYZruz75boUIsVi35FNnFg=/3550x1997/smart/filters:no_upscale()/GettyImages-173086147-56a0c5685f9b58eba4b3adef.jpg')"
  
  }
}
// function wetherReport(city){
//   url=`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${whetherApi.key}`
//   fetch(url).then(whether=> {
//     return whether.json()
//   }).then(showReport)
// }

// function showReport(whether){
//   console.log(whether)
// }
