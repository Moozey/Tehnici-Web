freq_images = [false, false, false, false, false, false, false, false, false];

function redirect() {
  window.location.href = "contact.html";
}
function goback() {
  window.location.href = "index.html";
}
function gallery() {
  window.location.href = "galerie.html";
}
function redirect2() {
  window.location.href = "preturi.html";
}
function cont() {
  window.location.href = "cont.html";
}
function despre_text() {
  var el = document.getElementById("scris");
  var style = window.getComputedStyle(el);
  if (style.display == `none`) el.style.display = `block`;
  else el.style.display = `none`;

  var ell = document.getElementById("scris2");
  ell.style.display = `none`;

  var elll = document.getElementById("scris3");
  elll.style.display = `none`;
}

function despre_even() {
  var el = document.getElementById("scris");
  el.style.display = `none`;

  var ell = document.getElementById("scris2");
  var stylee = window.getComputedStyle(ell);
  if (stylee.display == `none`) ell.style.display = `block`;
  else ell.style.display = `none`;

  var elll = document.getElementById("scris3");
  elll.style.display = `none`;
}

function despre_serv() {
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

  var el6 = document.getElementById("autentificare");
  el6.style.display = `none`;
}

//misca logo

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

function misca() {
  window.requestAnimationFrame(misca);
  var logo = document.getElementById("logo");
  var ball_style = window.getComputedStyle(logo);

  if (keyD == true) {
    var leftValue = ball_style.getPropertyValue("left").replace("px", "");
    logo.style.left = Number(leftValue) + 10 + "px";
  }
  if (keyS == true) {
    var topValue = ball_style.getPropertyValue("top").replace("px", "");
    logo.style.top = Number(topValue) + 10 + "px";
  }
  if (keyA == true) {
    var leftValue = ball_style.getPropertyValue("left").replace("px", "");
    logo.style.left = Number(leftValue) - 10 + "px";
  }
  if (keyW == true) {
    var topValue = ball_style.getPropertyValue("top").replace("px", "");
    logo.style.top = Number(topValue) - 10 + "px";
  }
}
window.requestAnimationFrame(misca);

var x = setInterval(function () {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //document.getElementById("ceva").innerHTML = time;
}, 1000);

window.onload = function () {
  var bara = document.getElementById("bara_suss");
  var but_ad = document.getElementById("add_foto");

  but_ad.addEventListener("click", adauga_poza);
  function adauga_poza() {
    image_array = [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "8.jpeg",
    ];
    //vector de frecventa pentru pozele random ce urmeaza a fi adaugate
    random_index = Math.floor(Math.random() * 8);
    while (freq_images[random_index]) {
      random_index = Math.floor(Math.random() * 8);
    }
    freq_images[random_index] = true;

    var new_poz = document.createElement("img");
    image = image_array[random_index];
    new_poz.src = `./poze_cai/${image}`;
    document.body.appendChild(new_poz);
    // console.log(random_index);
  }
  //console.log(bara.getBoundingClientRect());
};

// // mail
// function ValidateEmail(inputText) {
//   var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//   if (inputText.match(mailformat)) {
//     alert("Adresa de mail corecta");
//     return true;
//   } else {
//     alert("Nu este o adresa de mail valida");
//     return false;
//   }
// }

// document.getElementById("demo").addEventListener("keydown", myFunction);

// function myFunction() {
//   var text = "";
//   var x = document.getElementById("demo");
//   text += x.value;
//   console.log(x.value);
//   document.getElementById("mail").style.backgroundColor = text;
// }

// window.onload = () => {
//   const barButton = document.querySelector(".user-bar #changeDetails");
//   const removeButton = document.querySelector("#removeDetails");
//   const refreshButton = document.getElementById("refresh");
//   barButton.addEventListener("click", changeDetails);
//   removeButton.addEventListener("click", removeDetails);
//   refreshButton.addEventListener("click", () => {
//     window.location.reload();
//   });
//   renderBar();
// };

// function renderBar() {
//   const barMessage = document.querySelector(".user-bar .message");
//   const barButton = document.querySelector(".user-bar #changeDetails");
//   let userDetails = null;
//   try {
//     userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   } catch (error) {
//     userDetails = null;
//   }
//   if (userDetails) {
//     barMessage.innerHTML = `Bine ai venit, ${userDetails.name}! Parola ta este: ${userDetails.age}`;
//     barButton.innerHTML = "Schimbă Userul";
//   } else {
//     barMessage.innerHTML = "Bine ai venit! Conecteaza-te!";
//     barButton.innerHTML = "LogIn";
//   }
// }

// function changeDetails() {
//   const name = prompt("Introduceti adresa de email");
//   if (!ValidateEmail(name)) return;
//   const age = prompt("Introduceti parola");
//   if (!age) return;
//   const userDetails = { name, age };
//   localStorage.setItem("userDetails", JSON.stringify(userDetails));
//   renderBar();
// }

// function removeDetails() {
//   localStorage.removeItem("userDetails");
//   renderBar();
// }
