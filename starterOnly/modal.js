function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeModal() {
  modalbg.style.display = "none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function validate(event) {
  event.preventDefault();
  const first = document.getElementById("first").value;
  console.log(first);
  if (first.length < 2) {
    console.log("Veuillez entrer votre Prenom")

  } else {
    console.log("Prénom OK")

  }



  const last = document.getElementById("last").value;
  console.log(last);
  if (last.length < 2) {
    console.log("Veuillez entrer votre nom");
  } else {
    console.log("Nom OK")
  }
  const email = document.getElementById("email").value;
  console.log(email);
  if (last.length < 2) {
    console.log("Veuillez entrer votre adresse email");
  } else {
    console.log("email OK")
  }
  const birthdate = document.getElementById("birthdate").value;
  console.log(birthdate);
  if (last.length < 2) {
    console.log("Veuillez entrer votre date de naissance");
  } else {
    console.log("birthdate OK")
  }
  const quantity = document.getElementById("quantity").value;
  console.log(quantity);
  if (last.length < 2) {
    console.log("Dans combien de tournois avez vous dejà participé");
  } else {
    console.log("Nombre de tournois OK")
  }


  const location1 = document.getElementById("location1").value;
  console.log(location1);
  if (document.getElementById("location1").checked == true) {
    console.log("Choix ville OK");
  } else {
    console.log("Veuillez selectionner les villes. ")

  }
  const checkbox1 = document.getElementById("checkbox1").value;
  console.log(checkbox1);
  if (document.getElementById("checkbox1").checked == true) {
    console.log("Acceptation OK");
  } else {
    console.log("Veuillez lire et accepter les conditions d'utilisation. ")

  }
}





