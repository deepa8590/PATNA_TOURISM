// let navbar = document.querySelector('.header .navbar');
//  documenet.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//  }
//  window.onscroll =() =>{
//      navbar.classList.remove('active');  
//  }


function moreless(){
 
 var dots= document.getElementById("dots");
 var moretext= document.getElementById("more-text");
 var btntext=document.getElementById("btn");
 
 if(dots.style.display!="none"){
    dots.style.display="none";
    moretext.style.display="inline";
    btntext.innerHTML="Read Less";
   }
 else{
  dots.style.display="inline";
  moretext.style.display="none";
  btntext.innerHTML="Read More";
 }
 
}



//============================================================================================================


// Sticky Navbar
let header = document.querySelector('.header');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}