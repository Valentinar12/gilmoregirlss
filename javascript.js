document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll('.imagenes img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('imagen-modal');
  const modalTexto = document.getElementById('nombre-personaje');
  const cerrar = document.querySelector('.cerrar');
  const navIzquierda = document.querySelector('.nav-modal.izquierda');
  const navDerecha = document.querySelector('.nav-modal.derecha');

  let indiceActual = 0;

  const mostrarImagen = (index) => {
    const img = imagenes[index];
    modalImg.src = img.src;
    modalTexto.textContent = img.dataset.nombre;
    modal.style.display = 'flex';
    indiceActual = index;
  };

  imagenes.forEach((img, index) => {
    img.addEventListener('click', () => {
      mostrarImagen(index);
    });
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  navIzquierda.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  navDerecha.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
