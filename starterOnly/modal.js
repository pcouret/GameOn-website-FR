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
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
  } else {
    console.log("Prénom OK")
    first.innerText = "";
  }

  const last = document.getElementById("last").value;
  console.log(last);
  if (last.length < 2) {
    console.log("Veuillez entrer votre nom");
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
  } else {
    console.log("Nom OK")
    last.innerText = "";
  }
  const email = document.getElementById("email").value;
  console.log(email);
  if (last.length < 2) {
    console.log("Veuillez entrer votre adresse email");
    emailError.innerText = "Veuillez entrer votre adresse email";
  } else {
    console.log("email OK")
    email.innerText = "";
  }
  const birthdate = document.getElementById("birthdate").value;
  console.log(birthdate);
  if (last.length < 2) {
    console.log("Veuillez entrer votre date de naissance");
    birthdateError.innerText = "Veuillez entrer votre date de naissance";
  } else {
    console.log("birthdate OK")
    birthdate.innerText = "";
  }
  const quantity = document.getElementById("quantity").value;
  console.log(quantity);
  if (last.length < 2) {
    console.log("Dans combien de tournois avez vous dejà participé");
    quantityError.innerText= "Veuillez indiquer le nombre de tournois";
  } else {
    console.log("Nombre de tournois OK")
    quantity.innerText = "";
  }


  const location1 = document.getElementById("location1").value;
  console.log(location1);
  if (document.getElementById("location1").checked == true) {
    console.log("Choix ville OK");
    location1.innerText = "";
  } else {
    console.log("Veuillez selectionner les villes. ")
    location1Error.innerText="Veuillez selectionner les villes.";

  }
  const checkbox1 = document.getElementById("checkbox1").value;
  console.log(checkbox1);
  if (document.getElementById("checkbox1").checked == true) {
    console.log("Acceptation OK");
    checkbox1.innerText = "";
  } else {
    console.log("Veuillez lire et accepter les conditions d'utilisation. ")
    checkbox1Error.innerText="Veuillez lire et accepter les conditions d'utilisation.";

  }
}
const firstError = document.getElementById("firstError"); // on récupère le champ text dans lequel l'erreur sera affichée
const lastError = document.getElementById("lastError");
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function (firstError) {
  firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prenom" // on met un texte dans le champ, affichant ainsi une erreur
})

btn2.addEventListener('click', function (firstError) {
  firstError.innerText = "" // on met une string vide dans le champ, l'erreur ne sera donc pus visible
})

btn1.addEventListener('click', function (lastError) {
  lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom" // on met un texte dans le champ, affichant ainsi une erreur
})

btn2.addEventListener('click', function (lastError) {
  lastError.innerText = "" // on met une string vide dans le champ, l'erreur ne sera donc pus visible
})


