var navbarElement = document.getElementsByClassName("top-bar")[0]
var bodyElement = document.body;

window.addEventListener("resize", resizeBody)
onload = resizeBody

function resizeBody(){
	bodyElement.style.marginTop = navbarElement.clientHeight + "px";
}