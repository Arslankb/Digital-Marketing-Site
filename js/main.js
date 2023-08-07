// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// Navbar Hide

// let navBar = document.querySelector(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })


// Owl Carousel

$(document).ready(function(){
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 2000, 
        autoplayHoverPause: true ,
        responsiveClass: true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
});
