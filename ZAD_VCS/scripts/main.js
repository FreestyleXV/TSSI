// Zmiana ikonki

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Rias_blush.jpg') {
    myImage.setAttribute ('src','images/Rias_tired.jpg');
  } else {
    myImage.setAttribute ('src','images/Rias_blush.jpg');
  }
}

// Przywitanie z imieniem

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Podaj swoje imię (lub pseudonim, bo pamiętaj, że w internecie najlepiej pozostać anonimowym)');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'To jest Rias Gremory, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'To jest Rias Gremory, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
