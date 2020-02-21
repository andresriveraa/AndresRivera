const popUpClose1 = document.getElementById('closepopup1'),
popUpClose2 = document.getElementById('closepopup2'),
popUpClose3 = document.getElementById('closepopup3'),

moreInfopopu1 = document.getElementById('moreInfopopu1'),
moreInfopopu2 = document.getElementById('moreInfopopu2'),
moreInfopopu3 = document.getElementById('moreInfopopu3'),

moreInfotext1 = document.getElementById('MoreInfo1'),
moreInfotext2 = document.getElementById('MoreInfo2'),
moreInfotext3 = document.getElementById('MoreInfo3');

moreInfotext1.addEventListener('click', function(){showPop(moreInfopopu1)});
moreInfotext2.addEventListener('click', function(){showPop(moreInfopopu2)});
moreInfotext3.addEventListener('click', function(){showPop(moreInfopopu3)});

popUpClose1.addEventListener('click', function(){closePop(moreInfopopu1)});
popUpClose2.addEventListener('click', function(){closePop(moreInfopopu2)});
popUpClose3.addEventListener('click', function(){closePop(moreInfopopu3)});

// slider Projects
const SlideProjec1 = document.getElementById('SlideProjec1'),
SlideProjec2 = document.getElementById('SlideProjec2'),
SlideProjec3 = document.getElementById('SlideProjec3'),
imgSli1 = [
  {img: 'img/projects/vecino1.png'},
  {img: 'img/projects/vecino2.png'},
  {img: 'img/projects/vecino3.png'}
],
imgSli2 = [
  {img: 'img/projects/lyr1.jpg'},
  {img: 'img/projects/lyr2.png'},
  {img: 'img/projects/lyr3.png'}
],
imgSli3 = [
  {img: 'img/projects/amora1.jpg'},
  {img: 'img/projects/amora2.png'},
  {img: 'img/projects/amora3.png'}
];

let i = 0;
let i2 = 0;
let i3 = 0;
let counter1 = setInterval(functionSlide1, 10000)
let counter2 = setInterval(functionSlide2, 6000)
let counter3 = setInterval(functionSlide3, 6000)

function functionSlide1() {
      if(i < imgSli1.length -1) {
        i++;
      } else {
        i = 0;
      }
      SlideProjec1.src = imgSli1[i].img;
}
function functionSlide2() {
      if(i2 < imgSli2.length -1) {
        i2++;
      } else {
        i2 = 0;
      }
      SlideProjec2.src = imgSli2[i2].img;
}
function functionSlide3() {
      if(i3 < imgSli3.length -1) {
        i3++;
      } else {
        i3 = 0;
      }
      SlideProjec3.src = imgSli3[i3].img;
}

let Pause = function(){
  clearTimeout(counter)
}

//  popup
function closePop(p){
  // Pause()
  p.classList.remove('showPopup');
}
function showPop(p){
  // counter()
  p.classList.add('showPopup');
}