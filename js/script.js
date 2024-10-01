// script.js
document.addEventListener("DOMContentLoaded", function () {

  // JavaScript para cargar el head
  fetch('partials/head.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML = data;
    });

  // JavaScript para cargar el header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      setActiveNavLink(); // Llamamos a la función para activar el link correspondiente
    });

  //JavaScript para setear el link activo en el nav
  function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const navLinks = document.querySelectorAll('header .container nav a');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === page) {
        link.classList.add('active');
      }
    });

  }

});
