window.onload = function rotire(){
    var logoo = document.getElementById("logo");
    logoo.style.WebkitTransitionDuration="0.5s";
    logoo.style.webkitTransform = 'rotate(360deg)';

}

function redirect(){
    window.location.href="contact.html";
} 
function goback() {
    window.location.href="index.html";
 }
 function gallery(){
    window.location.href="galerie.html";
} 
function redirect2(){
    window.location.href="preturi.html";
} 
function cont(){
    window.location.href="cont.html";
} 
function despre_text(){
    var el = document.getElementById("scris");
    var style = window.getComputedStyle(el);
    if (style.display == `none`) el.style.display = `block`;
    else el.style.display = `none`;

    var ell = document.getElementById("scris2");        
    ell.style.display = `none`;

    var elll = document.getElementById("scris3");
    elll.style.display = `none`;  
}

function despre_even(){
    var el = document.getElementById("scris");
    el.style.display = `none`;

    var ell = document.getElementById("scris2");
    var stylee = window.getComputedStyle(ell);
    if (stylee.display == `none`) ell.style.display = `block`;
    else ell.style.display = `none`;

    var elll = document.getElementById("scris3");
    elll.style.display = `none`;
    
}

function despre_serv(){
    var el = document.getElementById("scris");
    el.style.display = `none`;


    var ell = document.getElementById("scris2");
    ell.style.display = `none`;

    var elll = document.getElementById("scris3");
    var styleee = window.getComputedStyle(elll);
    if (styleee.display == `none`) elll.style.display = `block`;
    else elll.style.display = `none`;
}

function afis_aut() {
    var el = document.getElementById("but_aut");
    var el2 = document.getElementById("but_inreg");
    el.style.display = `none`;
    el2.style.display = `none`;

    var el3 = document.getElementById("log_in");
    el3.style.display = `block`;

    var el4 = document.getElementById("autentificare");
    el4.style.display = `block`;
}

function afis_inreg() {
    var el = document.getElementById("but_aut");
    var el2 = document.getElementById("but_inreg");
    el.style.display = `none`;
    el2.style.display = `none`;

    var el3 = document.getElementById("log_in");
    el3.style.display = `block`;

    var el4 = document.getElementById("inregistrare");
    el4.style.display = `block`;
}

function ms() {
    var el4 = document.getElementById("inregistrare");
    el4.style.display = `none`;

    var el5 = document.getElementById("ura");
    el5.style.display = `block`;
}