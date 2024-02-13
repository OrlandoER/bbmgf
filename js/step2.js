var imagenes = [
  { src: './img/dui.png', texto: 'Texto debajo de la imagen', buttonText: 'Botón 1' },
  { src: './img/dui.png', texto: 'Está mi hater #1', buttonText: 'Sí' },
  { src: './img/lilo.png', texto: 'Mi berrinchuda enojona', buttonText: 'A veces' },
  { src: './img/gossip.gif', texto: 'Porte de administradora', buttonText: 'Lo sé' },
  { src: './img/zzz3.gif', texto: 'Eterna perezosa', buttonText: 'Zzz' },
  { src: './img/jenny.gif', texto: 'Caracter de diva', buttonText: 'Esa no porque me meo' },
  { src: './img/babi.png', texto: 'Hora de la verdad, preciosa', buttonText: 'A poco sí?' },
  { src: './img/babi.png', texto: 'Mi persona favorita', buttonText: 'A poco sí?' }
];

// Variable para llevar el control de la imagen actual
var currentIndex = 0;

// Función para cambiar la imagen y el texto del botón
function cambiarContenido() {
  var image = document.getElementById('image');
  var text = document.getElementById('text');
  var button = document.getElementById('button');

  // Cambiar la imagen y el texto del botón
  currentIndex = (currentIndex + 1) % imagenes.length;
  var currentImage = imagenes[currentIndex];
  image.src = currentImage.src;
  text.textContent = currentImage.texto;
  button.textContent = currentImage.buttonText;

  if (currentIndex === imagenes.length - 1) {
    // Si estamos en el último elemento, redirigir a step3.html
    window.location.href = 'babi.html';
  }
}
