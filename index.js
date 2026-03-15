

//Script to ensure youtube videos run on firefox
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var url = window.location.pathname;


var animationrunning = false;

var currentTab = 1;
var tabAmount = 3;

function setfirstTab()
{
    currentTab = 1;
    swapTab();
}

function nextTab() {

    if (animationrunning) { return }
    animationrunning = true;

    //Get reference to previous tab
    var previoustab = document.getElementById("tab" + currentTab);
    //Start animation for previous tab
    previoustab.style.animation = "slideLeft 0.5s linear forwards";

    //Hide when animation ends
    setTimeout(function () {
        previoustab.style.display = "none";
        previoustab.style.animation = "none";
    }, 500);

    if (currentTab < tabAmount) {
        currentTab += 1;
    }
    else {
        currentTab = 1;
    }
    swapTab();

    document.getElementById("tab" + currentTab).style.animation = "slideRight 0.5s linear reverse forwards";

    setTimeout(function () {
        animationrunning = false;
        document.getElementById("tab" + currentTab).style.animation = "none";
    }, 500);
}

function lastTab() {

    if (animationrunning) { return }
    animationrunning = true;

    //Get reference to previous tab
    var previoustab = document.getElementById("tab" + currentTab);
    //Start animation for previous tab
    previoustab.style.animation = "slideRight 0.5s linear forwards";

    //Hide when animation ends
    setTimeout(function () {
        previoustab.style.display = "none";
        previoustab.style.animation = "none";
    }, 500);

    if (currentTab > 1) {
        currentTab -= 1;
    }
    else {
        currentTab = tabAmount;
    }

    swapTab();

    document.getElementById("tab" + currentTab).style.animation = "slideLeft 0.5s linear reverse forwards";

    setTimeout(function () {
        animationrunning = false;
        document.getElementById("tab" + currentTab).style.animation = "none";
    }, 500);
}

function swapTab() {

    //Open requested tab
    document.getElementById("tab" + currentTab).style.display = "inline-block";

}

