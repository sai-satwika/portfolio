let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

window.onscroll = () => {
    navbar.classList.remove('active');
}

let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }
$('.tdnn').click(function () {
    $("body").toggleClass('light');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
  });