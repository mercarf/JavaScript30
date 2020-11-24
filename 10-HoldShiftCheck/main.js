'use strict';

// Seleccionamos todos los checkboxes
const checkboxes = document.querySelectorAll(
    '.inbox input[type="checkbox"]'
  );

let lastChecked;

// Función manejadora de los checkboxes
function handleCheck(e) {
  // Comprueba si tiene el SHIFT pulsado y comprueba si lo están clickando/Checkeando
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Bucle que recorre cada checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);