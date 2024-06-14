// ----------------------- SIDE BAR FUNCTIONALITY -----------------------------

function triggerSideBar() {
    if(sideBarIsOpen) {
        closeSideBar();
    } else {
        openSideBar();
    }
}
function openSideBar() {
    document.getElementById("side-bar").style.width = "250px";
    document.getElementById("side-bar-btn").style.right = "165px";
    document.getElementById("side-bar-btn-caret").className= "fa-solid fa-chevron-right fa-xl";
    sideBarIsOpen = true;
}
function closeSideBar() {
    document.getElementById("side-bar").style.width = 0;
    document.getElementById("side-bar-btn").style.right = "5px";
    document.getElementById("side-bar-btn-caret").className= "fa-solid fa-chevron-left fa-xl";
    sideBarIsOpen = false;
}