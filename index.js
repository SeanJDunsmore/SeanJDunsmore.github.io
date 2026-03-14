

//Script to ensure youtube videos run on firefox
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var url = window.location.pathname;


var currentTab = 1;
var tabAmount = 3;

function setfirstTab()
{
    currentTab = 1;
    swapTab();
}

function nextTab() {

    if (currentTab < tabAmount) {
        currentTab += 1;
    }
    else {
        currentTab = 1;
    }
    swapTab();
}

function lastTab() {

    //Get reference to previous tab
    var previoustab = document.getElementById("tab" + currentTab);
    //Start animation for previous tab
    previoustab.style.animation = "slideLeft 0.5s linear";
    //previoustab.style.animationPlayState = in
    //Reverse keyword
    //previoustab.startAnimation("slideoffLeft 0.5s linear");
    //Add listener for when the previous tab ends
    //previoustab.addEventListener("animationend", alert("ended"));
    //previoustab.addEventListener("animationstart", alert("started"));

    document.getElementById("tab" + currentTab).onanimationend = hideTab(currentTab)

    if (currentTab > 1) {
        currentTab -= 1;
    }
    else {
        currentTab = tabAmount;
    }

    swapTab();
}

function swapTab() {

    //Open requested tab
    document.getElementById("tab" + currentTab).style.display = "block";

    document.getElementById("tab" + currentTab).style.animation = "slideRight 0.5s linear reverse";
}

function hideTab(tab)
{
    alert("destroy");
    document.getElementById("tab" + tab).style.animation = "none";
    document.getElementById("tab" + tab).style.display = "none"
}

