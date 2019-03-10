const clockContainer = document.querySelector(".js-clock"),
      clockTitle  = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${showTime(hours)}:${showTime(minutes)}:${showTime(seconds)}`;
}

function showTime(time){
    return `${time < 10? `0${time}`:`${time}`}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();