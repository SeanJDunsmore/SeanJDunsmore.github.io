

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

    if (currentTab > 1) {
        currentTab -= 1;
    }
    else {
        currentTab = tabAmount;
    }
    swapTab();
}

function swapTab() {
    //Hide all tabs
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Open requested tab
    document.getElementById("tab" + currentTab).style.display = "block";

}
