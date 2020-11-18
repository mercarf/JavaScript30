'use strict';

//constantes
const canvas = document.querySelector('.draw'); 
const button = document.querySelector('.reset');
const saveBtn = document.querySelector('.save');

//Indicamos el valor que representa un contexto de reperesentacion bidimensional
const ctx = canvas.getContext('2d'); 

//Indicamos las dimensiones que va a ocupar el canvas
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

//Indicamos los estipos por defecto que vamos a darle al contexto 2D
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

//Definimos las variables que van a cambiar
let isDrawing = false;
// let lines = [];
let lastX = 0; //Coordenada X inicial
let lastY = 0; //Coordenada Y inicial
let hue = 145; //Color hue inicial
let direction = true;
let position = canvas.getBoundingClientRect()
lastX = position.x;
lastY = position.y;


// function startDraw () {
//   drawLine = true;
//    lines.push([]);
// };

//Función que permitirá realizar el dibujo 2D
function draw(e) {
  e.preventDefault();
  if (!isDrawing) return; // Paramos la funcion cuando no estamos clickando el ratón
  // console.log(e);
  let newPositionX = 0;
  let newPositionY = 0;
  if (e.changedTouches == undefined) {
    // Versión ratón
    newPositionX = e.offsetX;
    newPositionY = e.offsetY;
  } else {
    // Versión touch, pantalla tactil
    newPositionX = e.changedTouches[0].offsetX - lastX;
    newPositionY = e.changedTouches[0].offsetY - lastY;
  }

  ctx.strokeStyle = `hsl(${hue}, 70%, 50%)`;
  ctx.save();
  ctx.beginPath();

  // Indicamos desde donde empieza
  ctx.moveTo(lastX, lastY);
  // Indicamos hasta donde termina
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //Valores de gama de color entre los que va a variar el trazo
  hue++;
  if (hue >= 320 & hue <145) {
    hue = 0;
  }
console.log(hue);
  //Valores de tamaño entre los que va a variar el trazo
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  //Valores de dirección entre los que va a variar el trazo
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

function drawing(e){
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
}

function reset(){
  location.reload()
}

function saveCanvas(){
  // only jpeg is supported by jsPDF
    let imgData = canvas.toDataURL("image/jpeg", 1.0);
    let pdf = new jsPDF('landscape');
  
    pdf.addImage(imgData, 'JPEG', 0, 0, 300, 210);
    pdf.save("download.pdf");
}



//EVENTOS

// Pintamos cuando clickamos el ratón
canvas.addEventListener('mousedown', drawing);

canvas.addEventListener('mousemove', draw); //Pinta mientras el ratón semueve y está clickado/en uso
canvas.addEventListener('mouseup', () => isDrawing = false); //Deja de pintar cuando dejamos de clickar
canvas.addEventListener('mouseout', () => isDrawing = false); //Deja de pintar cuando el raton sale de la pantalla

// Cuando usamos el movil
  canvas.addEventListener('touchstart', drawing,false);
  
  canvas.addEventListener('touchmove', draw,false); //Pinta mientras el ratón semueve y está clickado/en uso


// Botones
button.addEventListener('click', reset);
saveBtn.addEventListener("click", saveCanvas, false);
