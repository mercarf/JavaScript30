'use strict';

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;// skip function if it's not 'transform'
  e.target.classList.remove('playing');
  e.target.classList.remove('playClick');
}

function playSound(e) {
  const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);

  if (!audio) return; // stop function from running

  // Change class
  key.classList.add('playing');
  
    // Play audio
  audio.currentTime = 0;
  audio.play();
}

function playSoundClick(e) {
  const pressedKey = e.currentTarget;
  const keyClicks = document.querySelectorAll('.key');
  const keyClicked = document.querySelector(`.key[id="${pressedKey.id}"]`);
  const audio = document.querySelector(`.audio[id="${pressedKey.id}"]`);
  console.log(pressedKey);
  console.log(keyClicked);

  for (const keyClick of keyClicks) {
    
    if (pressedKey === keyClick) {
      keyClicked.classList.add('playClick');
    }
  }
    
  if (!audio) return;

   
    // Play audio
  audio.currentTime = 0;
  audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));

// Event listeners
keys.forEach((key) =>
  key.addEventListener('transitionend', removeTransition)  
);
keys.forEach((key) =>
  key.addEventListener('click', playSoundClick)  
);

window.addEventListener('keydown', playSound);