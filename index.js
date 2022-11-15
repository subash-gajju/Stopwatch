var seconds = 00;
var tens = 00;
var appendtens = document.getElementById("tens");
var appendseconds = document.getElementById("seconds");
var startbtn = document.getElementById("startbtn");
var stopbtn = document.getElementById("stopbtn");
var resetbtn = document.getElementById("resetbtn");
var Interval;

startbtn.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
stopbtn.onclick = function(){
    clearInterval(Interval);
}
resetbtn.onclick = function(){
    clearInterval(Interval);
    tens = 00;
    seconds = 00;
    appendseconds.innerHTML = seconds;
    appendtens.innerHTML = tens;
}

function startTimer(){
    tens++;
    if(tens <= 9){
        appendtens.innerHTML = "0"+tens; 
    }
    if(tens > 9){
        appendtens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendtens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        appendseconds.innerHTML = seconds;
    }
}