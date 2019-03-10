const weather = document.querySelector(".js-weather");

const API_KEY = "";
const COORDS ='coords';

function getWeather(lat,lng){
    //fetch를 통해 외부 서버에서 데이터를 요청하고 이때 비동기 데이터를 핸들링 하기위해 promise 객체를 반환 
    //이를 then으로 핸들링 v는 response http정보를 의미 header body ... 이중에서 json 관련 데이터만들 가져오기 위해 v.json()메서드를 이용함
    //
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(v =>  v.json()) // promise의 상태는 resolved로 데이터를 처리하는데 성공했다는 뜻 이때 then을 통해서 핸들링해주어야함
     .then(json => {
         const temperature = json.main.temp;
         const place = json.name;
         weather.innerText = `temperature:${temperature} / place:${place}`;
     });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    //성공시 경도 위도를 객체로 한 뒤 저장
    const latitude = position.coords.latitude;
    const longitude =  position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){  
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords =JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();