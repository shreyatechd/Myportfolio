var typed=new Typed((".skills"),{
    strings:["Full Stack Developer", "c++ Developer","Python Developer","SQL Developer"],
    typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true

});
var menu=document.querySelectorAll("#menu");
var navbar=document.querySelectorAll("header nav");
menu.onClick=()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");

}