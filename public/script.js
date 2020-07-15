//  setInterval(fucntion(),timeTo Repeat) ==> repeatively running
// setTimeOut(function(), timeAfterStart) ==>start after some define time

// Method 1:
// setInterval(function () {
//     console.log("running...")
// }, 1000)

// OR
// Method 2:

// function timer() {
//     console.log("runiing...")
// }

// setInterval(timer(), 1000)

// function timeOut() {
//     console.log("running...")
// }
// 3000 milliseconds == 3 seconds

// let count = 0;
// var interval;
// function timer() {
//     count++
//     console.log(count," running...")
// }

// interval = setInterval(timer, 1000);
// setTimeout(function(){
//     clearInterval(interval)
// }, 5000)

var min = 0
var sec = 0
var msec = 0
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var executed
var flag = false
function timer() {
    msec++
    msecHeading.innerHTML = msec
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}

// function start() {
//     interval = setInterval(timer, 10)
// }

// function stop1() {
//     clearInterval(interval)
//     var executed = false
// }

console.log(flag, " before clicking start")

function start() {
    if (flag) {
        console.log(flag, " Need to stop first flag==false still")
    }
    else {
        console.log(flag, " else start statement")
        interval = setInterval(timer, 10)
        flag = true
    }
}

function stop1() {
    console.log(flag)
    clearInterval(interval)
    flag = false

}

function reset() {
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = 0
    secHeading.innerHTML = 0
    msecHeading.innerHTML = 0
}

// if you want your fucntion to run at once use below code
// var something = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             // do something
//         }
//     };
// })();














