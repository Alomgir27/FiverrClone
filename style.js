//Home section
let value = document.getElementById("home");
let pic = ["Top pic/homePic.png", "Top pic/homePic1.png", "Top pic/homePic2.jpg","Top pic/homePic3.png", "Top pic/homePic4.png","Top pic/homePic5.png"];
setInterval(homePicToggle, 6000);
let idx = 0;
let len = pic.length;
function homePicToggle(){
    idx %= len;
    let x = "url(\'";
    x += pic[idx];
    x += "\')";
    value.style.backgroundImage = x;
    idx += 1;
}

///navbar section 
let navValue = document.getElementById("navbar");
window.onscroll = function (){
    myFunction();
    linkFunction();
}
function myFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navValue.style.background = '#fff';
        navValue.children[0].children[0].children[0].style.color = '#555';
        navValue.children[0].children[0].children[1].children[0].childNodes.forEach((element)=>{
            element.childNodes.forEach((e)=>{
                e.style.color = '#555';
            });
            element.addEventListener('mouseover', function(){
                element.childNodes.forEach((e)=>{
                    e.style.color='green';
                });
            });
            element.addEventListener('mouseleave', function(){
                element.childNodes.forEach((e)=>{
                    e.style.color='#555';
                });
            });
        });
       document.getElementById('join').style.border = '1px solid green';
       document.getElementById('hid').style.display = 'flex';
      
    }
    else {
        navValue.style.background = '';
        navValue.children[0].children[0].children[0].style.color = '';
        navValue.children[0].children[0].children[1].children[0].childNodes.forEach((element)=>{
            element.childNodes.forEach((e)=>{
                e.style.color = '';
            });
        });
        document.getElementById('join').style.border = '';
        document.getElementById('hid').style.display = 'none';
    }
}


function linkFunction(){
    if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
        document.getElementById('link').style.display = 'block';
    } else {
        document.getElementById('link').style.display = 'none';
    }
}

let slide_index = 1;
displaySlides(slide_index);

function nextSlide(n){
    displaySlides(slide_index += n);
}
function currentSlide(n){
    displaySlides(slide_index = n);
}
function displaySlides(n){
    let slides = document.getElementsByClassName("showSlide");
    if( n > slides.length){
        slide_index = 1;
    }
    if(n < 1){
        slide_index = slides.length;
    }
    for(let element of slides){
        element.style.display = "none";
    }
    slides[slide_index - 1].style.display = "flex";
}


$(document).ready(function(){
    $('#owl-carousel0').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed:400,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#owl-carousel1').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        dots:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    var $dots0 = $('#owl-carousel0 .owl-dot');
    function goToNextCarouselPage0() {    
    var $next = $dots0.filter('#owl-carousel0 .active').next();
    if (!$next.length)
        $next = $dots0.first();

      $next.trigger('click');
    }

    $('#btn-left').mousedown(function(){
        goToNextCarouselPage0();
    })
    $('#btn-right').mousedown(function(){
        goToNextCarouselPage0();
    })

    var $dots1 = $('#owl-carousel1 .owl-dot');
    function goToNextCarouselPage1() {    
    var $next = $dots1.filter('#owl-carousel1 .active').next();
    if (!$next.length)
        $next = $dots1.first();

      $next.trigger('click');
    }

    $('#btn-left1').mousedown(function(){
        goToNextCarouselPage1();
    })
    $('#btn-right1').mousedown(function(){
        goToNextCarouselPage1();
    })
});

