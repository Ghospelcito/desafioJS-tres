document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.querySelectorAll(".car");

  imagen.forEach(function (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("border-red");
    });
  });
});
