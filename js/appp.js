'use strict';

// Array in which we will store all our image
var imgArray = [];
var altArray = [];
var viewedArray = [];
var clickedArray = [];

//DOM process
var resultEl = document.getElementById('result');
var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElthree = document.getElementById('image-three');
var count = 0;

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

var result = '';
function renderResult() {
  for (var i = 0; i < imgArray.length; i++) {
    result = `${imgArray[i].alt} had ${imgArray[i].clicked} vote and was seen ${imgArray[i].viewed} time.`;
    var liEl = document.createElement('li');
    liEl.textContent = result;
    resultEl.append(liEl);
    console.log(result);
  }
}

function renderChart() {
  for (var i = 0; i < imgArray.length; i++) {
    altArray.push(imgArray[i].alt);
    viewedArray.push(imgArray[i].viewed);
    clickedArray.push(imgArray[i].clicked);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: altArray,
      datasets: [{
        label: '# of Votes',
        data: clickedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        // hoverBackgroundColor: "yellow",
        borderWidth: 1
      }]
    },
    options: {
      // responsive : false,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }

    }
  });
  // ctx.canvas.width = 600;
  // ctx.canvas.height = 100;   // this works when the maintainAspectRatio is coment it out
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElthree.addEventListener('click', eventHandler);

function eventHandler(e) {
  console.log(e.target.alt);
  // counting the number of click, we need to go the the entire array and check the proprety of that element has been clicked before:
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].alt === e.target.alt) {
      imgArray[i].clicked++;
      console.log(imgArray[i].clicked);
      break;
    }
  }
  count++;
  renderImage();
  if (count === 5) {
    imgElOne.removeEventListener('click', eventHandler);
    imgElTwo.removeEventListener('click', eventHandler);
    imgElthree.removeEventListener('click', eventHandler);
    renderResult();
    renderChart();
  }
}
renderImage();




