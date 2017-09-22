/**
 * Created by Transport_Dept on 9/16/2017.
 */
const navButton = document.querySelector(".nav-control");
const sliderNav = document.querySelector(".slider-nav");
const angleLeft = document.querySelector(".angle-left-link");

navButton.addEventListener('click', function() {
    if (sliderNav.style.left == "" || sliderNav.style.left === "-555px")
    {
        sliderNav.style.left = "0px";
        sliderNav.style.zIndex = 999;
        sliderNav.style.overflowY = "scroll";
    }
});

angleLeft.addEventListener('click', function(){
    if(sliderNav.style.left === "0px")
    {
        sliderNav.style.left = "-555px";

    }
});
