var Target = document.getElementById("clock");
var newyear = document.getElementById("data");

function clock() {
    var time = new Date();

    var year = time.getFullYear();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="오전";
    if(hours > 12){   
        var AmPm ="오후";
        hours %= 12;
    }

    Target.innerText = 
    `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ` +`${AmPm}` ;

}

function New_year() {
    const new_year = new Date("2023-01-01T00:00:00+0900");
    const today = new Date();
    const diff = new_year - today

    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

    newyear.innerText = `2023년 1월 1일까지 ${diffDay}일 ${diffHour < 10 ? `0${diffHour}` : diffHour}:${diffMin < 10 ? `0${diffMin}` : diffMin}:${diffSec < 10 ? `0${diffSec}` : diffSec}`
}

clock();
New_year();
setInterval(clock, 1000);
setInterval(New_year, 1000);