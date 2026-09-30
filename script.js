function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}

let form = document.getElementById("contactForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    message.innerText = "Thank you! Your message has been submitted.";

    form.reset();

});