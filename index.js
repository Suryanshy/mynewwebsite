const year = document.getElementById("year");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const yearVar = new Date().getFullYear();
year.innerHTML = yearVar;

function submitForm () {
    confirm(`Please confirm your fields: Name = ${fullName.value}, Email = ${email.value}, Phone = ${phone.value} and Message = ${message.value}.`);
}