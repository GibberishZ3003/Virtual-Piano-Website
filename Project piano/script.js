const KEYS_ARR = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', ',', 'l', '.', ';', '/', 'q', '2', 'w', '3', 'e', '4', 'r', 't', '6', 'y', '7', 'u', 'i', '9', 'o', '0', 'p', '-', '[', ']'];
const NOT_EXIST = -1;
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  if (key.classList.contains('black')) {
    const blackDot = document.createElement('div');
    blackDot.classList.add('white-dot');
    key.appendChild(blackDot);
  } else if (key.classList.contains('white')) {
    const whiteDot = document.createElement('div');
    whiteDot.classList.add('black-dot');
    key.appendChild(whiteDot);
  }
});

document.addEventListener('keydown', event => {
  if (event.repeat) return;
  const key = event.key;
  const keyIndex = KEYS_ARR.indexOf(key);
  if (keyIndex > NOT_EXIST) {
    playNote(keys[keyIndex]);
  }
});

document.addEventListener('keyup', event => {
  const key = event.key;
  const keyIndex = KEYS_ARR.indexOf(key);
  if (keyIndex > NOT_EXIST) {
    stopNote(keys[keyIndex]);
  }
});

keys.forEach(key => {
  key.addEventListener('mousedown', () => playNote(key));
  key.addEventListener('mouseup', () => stopNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
}

function stopNote(key) {
  key.classList.remove('active');
}