function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const form = document.getElementById("form");
const succes = document.getElementById("succes");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal
close.forEach((btn) => btn.addEventListener("click", closeModal));
document.getElementById("close").addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * 
 */
function closeModal() {
  modalbg.style.display = "none";
  form.style.display = "block";
    succes.style.display = "none";
}
// verification si les données entrées sont valide ou affichage d'un message d'erreur
function validate(event) {
  event.preventDefault();
  let eventError = false;

  // inscrire le prenom avec un nombre de lettre supperieure à 2
  const first = document.getElementById("first").value;
  if (first.length < 2) {
    eventError = true;
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
  } else {
    firstError.innerText = "";
  }

  // inscrire le nom avec un nombre de lettres supperieure à 2
  const last = document.getElementById("last").value;
  if (last.length < 2) {
    eventError = true;
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  } else {
    lastError.innerText = "";
  }

  // ecrire adresse mail avec un nombre de lettres superieure à 2
  const email = document.getElementById("email").value;
  if (email.length < 2) {
    eventError = true;
    emailError.innerText = "Veuillez entrer votre adresse email";
  } else {
    emailError.innerText = "";
  }

  // ajout date de naissance avec un nombre de lettres sup à 2
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate.length < 2) {
    eventError = true;
    birthdateError.innerText = "Veuillez entrer votre date de naissance";
  } else {
    birthdateError.innerText = "";
  }

  // nombre de participations à un tounois , indiquez le nombre de participations à un tournois
  const quantity = document.getElementById("quantity").value;

  if (isNaN(quantity) || quantity<0 || quantity>99 ) {
    eventError = true;
    quantityError.innerText = "Veuillez indiquer le nombre de tournois";
  } else {
    quantityError.innerText = "";
  }
  // selectionner les villes ou j'ai participé.
  if (checkLocation()) {
    location1Error.innerText = "";
  } else {
    location1Error.innerText = "Veuillez selectionner les villes.";
    eventError = true;
  }


  // accepter les conditions d'utilisation ou affichage message d'erreur
  const checkbox1 = document.getElementById("checkbox1").checked;

  if (checkbox1) {
    checkbox1Error.innerText = "";
  } else {
    checkbox1Error.innerText = "Veuillez lire et accepter les conditions d'utilisation.";
    eventError = true;
  }


  if (eventError === true) {
    goError.innerHTML = "Inscription refusée";
    return false;
  } else {
    form.style.display = "none";
    succes.style.display = "block";
    form.reset();
  }
}

/* Ajout du nom de villes ou le tournois a eu lieu */

function checkLocation() {
  const locations = document.getElementsByName("location")
  let resultat = false;
  locations.forEach(location => {
    if (location.checked) {
      resultat = true
    }
  })

  return resultat;


}

/**
 * Verification de l'email par rapport à la regex
 * @param {*} email
 * @returns boolean 
 */
function validateEmail(email) {
  const emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
  const valid = emailReg.test(email);

  if ((!valid)) {
    emailError.innerText = "Veuillez entrer votre adresse email";
  } else {
    emailError.innerText = "";
  }

}



