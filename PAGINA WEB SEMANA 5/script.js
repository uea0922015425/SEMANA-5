document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("urlInput");
  const addBtn = document.getElementById("addBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const gallery = document.getElementById("gallery");

  let selectedImage = null;

  // Función para agregar imagen
  addBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (url) {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Imagen agregada";
      img.classList.add("gallery-img");

      // Evento click para seleccionar
      img.addEventListener("click", () => {
        if (selectedImage) {
          selectedImage.classList.remove("selected");
        }
        selectedImage = img;
        selectedImage.classList.add("selected");
      });

      gallery.appendChild(img);
      urlInput.value = "";
    }
  });

  // Agregar imagen con Enter
  urlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

  // Eliminar imagen seleccionada
  deleteBtn.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.remove();
      selectedImage = null;
    } else {
      alert("Por favor, selecciona una imagen para eliminar.");
    }
  });
});