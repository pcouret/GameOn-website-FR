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

function validate(event) {
  event.preventDefault();
  let eventError = false;

  const first = document.getElementById("first").value;
  if (first.length < 2) {
    eventError = true;
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
  } else {
    firstError.innerText = "";
  }

  const last = document.getElementById("last").value;
  if (last.length < 2) {
    eventError = true;
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  } else {
    lastError.innerText = "";
  }
  const email = document.getElementById("email").value;
  if (email.length < 2) {
    eventError = true;
    emailError.innerText = "Veuillez entrer votre adresse email";
  } else {
    emailError.innerText = "";
  }
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate.length < 2) {
    eventError = true;
    birthdateError.innerText = "Veuillez entrer votre date de naissance";
  } else {
    birthdateError.innerText = "";
  }
  const quantity = document.getElementById("quantity").value;

  if (isNaN(quantity) || quantity<0 || quantity>99 ) {
    eventError = true;
    quantityError.innerText = "Veuillez indiquer le nombre de tournois";
  } else {
    quantityError.innerText = "";
  }
  
  if (checkLocation()) {
    location1Error.innerText = "";
  } else {
    location1Error.innerText = "Veuillez selectionner les villes.";
    eventError = true;
  }



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
 * Verifiaction de l'email par rapport à la regex
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



