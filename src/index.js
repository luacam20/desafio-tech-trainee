function carregar() {
    var container = window.document.getElementById('container');

    var hourElement = window.document.getElementById('hour');

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    var time = `${hour} : ${minutes}`;

    hourElement.innerText = time;

    if (hour >= 0 && hour < 18) {
        //Bom dia 
        container.style.background = '#0057f8';

        turnLightsOff();
    } else {
        //Boa noite
        container.style.background = '#001233';

        turnLightsOn();
    }
}

function turnLightsOnAndOff(window) {
    const element = document.getElementById(window);

    if (element.className === "lights-off") {
        element.className = "lights-on";
    } else {
        element.className = "lights-off";
    }
}

function turnLightsOn() {
    var windowOne = document.getElementById("window_one");
    var windowTwo = document.getElementById("window_two");
    var windowThree = document.getElementById("window_three");
    var windowFour = document.getElementById("window_four");
    var windowFive = document.getElementById("window_five");
    var windowSix = document.getElementById("window_six");
    var windowSeven = document.getElementById("window_seven");
    var windowEight = document.getElementById("window_eight");
    var windowNine = document.getElementById("window_nine");
    var windowTen = document.getElementById("window_ten");
    var windowEleven = document.getElementById("window_eleven");
    var windowTwelve = document.getElementById("window_twelve");

    windowOne.className = "lights-on";
    windowTwo.className = "lights-on";
    windowThree.className = "lights-on";
    windowFour.className = "lights-on";
    windowFive.className = "lights-on";
    windowSix.className = "lights-on";
    windowSeven.className = "lights-on";
    windowEight.className = "lights-on";
    windowNine.className = "lights-on";
    windowTen.className = "lights-on";
    windowEleven.className = "lights-on";
    windowTwelve.className = "lights-on";
}

function turnLightsOff() {
    var windowOne = document.getElementById("window_one");
    var windowTwo = document.getElementById("window_two");
    var windowThree = document.getElementById("window_three");
    var windowFour = document.getElementById("window_four");
    var windowFive = document.getElementById("window_five");
    var windowSix = document.getElementById("window_six");
    var windowSeven = document.getElementById("window_seven");
    var windowEight = document.getElementById("window_eight");
    var windowNine = document.getElementById("window_nine");
    var windowTen = document.getElementById("window_ten");
    var windowEleven = document.getElementById("window_eleven");
    var windowTwelve = document.getElementById("window_twelve");

    windowOne.className = "lights-off";
    windowTwo.className = "lights-off";
    windowThree.className = "lights-off";
    windowFour.className = "lights-off";
    windowFive.className = "lights-off";
    windowSix.className = "lights-off";
    windowSeven.className = "lights-off";
    windowEight.className = "lights-off";
    windowNine.className = "lights-off";
    windowTen.className = "lights-off";
    windowEleven.className = "lights-off";
    windowTwelve.className = "lights-off";
}
