var menuBtn=document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
var list = document.getElementById('list')
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if (sideNav.style.right == "-250px"){
        sideNav.style.right ="0";
        menu.src="./assets/cancel.png"
    }
    else{
        sideNav.style.right="-250px";
         menu.src="./assets/menu.png"
    }
}
list.onclick=function(){
    if(sideNav.style.right == "250px")
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});