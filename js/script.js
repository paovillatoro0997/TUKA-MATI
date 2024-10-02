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

  // Función para actualizar la galería principal
  function updateGallery(element) {
      const mainImage = document.getElementById('main-image');
      const title = document.getElementById('title');
      const description = document.getElementById('description');

      // Obtener los datos del elemento que ha sido clicado
      const imageSrc = element.src;
      const imageTitle = element.getAttribute('data-title');
      const imageDescription = element.getAttribute('data-description');

      // Actualizar el contenido de la imagen principal y su información
      mainImage.src = imageSrc;
      mainImage.alt = imageTitle;
      title.innerText = imageTitle;
      description.innerHTML = imageDescription;
  }

  // Función para cargar el contenido inicial (opcional)
  function loadInitialContent() {
      const firstThumbnail = document.querySelector('.thumbnail');
      updateGallery(firstThumbnail);
  }

  // Llama a la función cuando la página esté cargada
  window.onload = loadInitialContent;



});
