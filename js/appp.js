'use strict';

// Array in which we will store all our image
var imgArray = [];

//DOM process

var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElthree = document.getElementById('image-three');

// constructor

function Pic(alt, src) {
  this.viewed = 0; // I don't think we need this...
  this.clicked = 0;
  this.alt = alt;
  this.src = src;
  imgArray.push(this);
}

new Pic('bag', '../img/bag.jpg');
new Pic('banana', '../img/banana.jpg');
new Pic('bathroom', '../img/bathroom.jpg');
new Pic('boots', '../img/boots.jpg');
new Pic('breakfast', '../img/breakfast.jpg');
new Pic('bubblegum', '../img/bubblegum.jpg');
new Pic('chair', '../img/chair.jpg');
new Pic('cthulhu', '../img/cthulhu.jpg');
new Pic('dog-duck', '../img/dog-duck.jpg');
new Pic('dragon', '../img/dragon.jpg');
new Pic('pen', '../img/pen.jpg');
new Pic('pet-sweep', '../img/pet-sweep.jpg');
new Pic('scissors', '../img/scissors.jpg');
new Pic('shark', '../img/shark.jpg');
new Pic('sweep', '../img/sweep.png');
new Pic('tauntaun', '../img/tauntaun.jpg');
new Pic('unicorn', '../img/unicorn.jpg');
new Pic('usb', '../img/usb.gif');
new Pic('water-can', '../img/water-can.jpg');
new Pic('wine-glass', '../img/wine-glass.jpg');


// Random fuction to make sure that we are getting random image

function radomNumber(max) {
  return Math.floor(Math.random() * max);// exclude the last value (the max value)
}

function renderImage() {
  // getting the random object from the Array:
  var imgOne = imgArray[radomNumber(imgArray.length)];
  var imgTwo = imgArray[radomNumber(imgArray.length)];
  var imgThree = imgArray[radomNumber(imgArray.length)];
  while (imgOne === imgTwo || imgTwo === imgThree || imgOne === imgThree) {
    imgTwo = imgArray[radomNumber(imgArray.length)];
    imgThree = imgArray[radomNumber(imgArray.length)];
  }
  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElthree.src = imgThree.src;

  imgElOne.alt = imgOne.alt;
  imgElTwo.alt = imgTwo.alt;
  imgElthree.alt = imgThree.alt;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElthree.addEventListener('click', eventHandler);

function eventHandler(e){
  console.log(e.target.alt);
  // counting the number of click, we need to go the the entire array and check the proprety of that element has been clicked before:
  for(var i = 0 ; i < imgArray.length; i++){
    if(imgArray[i].alt === e.target.alt){
      imgArray[i].clicked++; // it's not saving the imgArray.clicked value when the image change... :(
      renderImage();
    }
  }
}
renderImage();

