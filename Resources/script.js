
var imageNum = 1;
var background = document.getElementsByClassName("main");

function leftScroll() {
    imageNum -= 1;
    if (imageNum < 1) {
        imageNum = 4;
    }
    else {

    }
    console.log(imageNum);
    scroll();
};

function rightScroll(){
    imageNum += 1;
    if (imageNum > 4) {
        imageNum = 1;
    }
    else {

    }
    console.log(imageNum);
    scroll();
};

function scroll() {
    switch(imageNum){
        case 1:
            document.getElementsByClassName("main")[0].style.backgroundImage = "url(resources/images/main.jpg)"
            break;
        case 2:
            document.getElementsByClassName("main")[0].style.backgroundImage = "url(resources/images/hole.jpg)"
            console.log("helllo")
            break;
        case 3:
            document.getElementsByClassName("main")[0].style.backgroundImage = "url(resources/images/geese.jpg)"
            break;
        case 4:
            document.getElementsByClassName("main")[0].style.backgroundImage = "url(resources/images/snow-louie.jpg)"
            break;
        }
}

window.onmousemove = function (event) {
    if (event.clientY < 100) {
        document.getElementsByClassName("header")[0].style.top = "0px"
    }
    else {
        document.getElementsByClassName("header")[0].style.top = "-101px"
    }
};



window.setInterval(picTimer, 5000);

function picTimer() {
    imageNum += 1;
    if (imageNum > 4) {
        imageNum = 1;
        
    }
    else {
        console.log(imageNum);
    }
    scroll();
};


