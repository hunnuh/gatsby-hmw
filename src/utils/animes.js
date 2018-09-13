import anime from 'animejs'



var Animes = function animes(){


  var float = anime({
  targets: '#meditating-hunter',
  translateY: 15,
  loop:  true,
  direction: "alternate",
  easing: "easeInOutSine"
  });




// -----------------------------------LARGE

  var loopAnim = {
    translateX: [
      { value: 30, duration: 0, elasticity: 0,delay: 0, },
      { value: 420, duration: 3000, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
      { value: 30, duration: 3000, elasticity: 0,delay: 0,   easing: "easeInOutQuad"},
    ],
    translateY: [
      { value: 60, duration: 0, elasticity: 0,delay: 0, },
      { value: 250, duration: 1600, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
      { value: 60, duration: 1400, elasticity: 0, delay: 200,   easing: "easeInOutQuad"},
      { value: 200, duration: 1600, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
      { value: 60, duration: 1400, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
    ],
    scale: [
      { value: 1, duration: 0, elasticity: 0,delay: 0, },
      { value: 4, duration: 1500, elasticity: 0, delay: 0,  easing: [.86,-0.06,.6,.93]},
      { value: 1, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
      { value: .7, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
      { value: 1, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
    ],
    zIndex: [
      {value: 1, duration: 0, round: true},
      {value: 3, duration: 3000, round: true},
      {value: 1, duration: 3000, round: true},
    ],
    loop: true,
    autoplay: false,
  }

var reacticon = anime({
  targets: '#hunterslide .reacticon', ...loopAnim
});

var jsicon = anime({
  targets: '#hunterslide .jsicon', ...loopAnim

});

var adobeicon = anime({
  targets: '#hunterslide .adobeicon', ...loopAnim

});


reacticon.play();
jsicon.seek(2000);
jsicon.play();
adobeicon.seek(4000);
adobeicon.play();

document && document.addEventListener("visibilitychange", function() {
  startAnims();
});

function startAnims(){
  reacticon.pause();
  jsicon.pause();
  adobeicon.pause();
  reacticon.seek(0);
  jsicon.seek(2000);
  adobeicon.seek(4000);
  reacticon.play();
  jsicon.play();
  adobeicon.play();
}




//-----------------------------------SMALL


let width = window.innerWidth;
let xTrans = 0;
setInterval(() => (getWidth()), 300);


function getWidth(){
  console.log("xTrans: " + xTrans)
  if (width !== window.innerWidth){
    width =  window.innerWidth
    xTrans = width*0.65
    startAnimsSmall();
    console.log("change xTrans: " + xTrans)
  }
}


var loopAnimSmall = {
  translateX: [
    { value: 0, duration: 0, elasticity: 0,delay: 0, },
    { value: xTrans, duration: 3000, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
    { value: 0, duration: 3000, elasticity: 0,delay: 0,   easing: "easeInOutQuad"},
  ],
  translateY: [
    { value: 0, duration: 0, elasticity: 0,delay: 0, },
    { value: 100, duration: 1600, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
    { value: 0, duration: 1400, elasticity: 0, delay: 200,   easing: "easeInOutQuad"},
    { value: 100, duration: 1600, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
    { value: 0, duration: 1400, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
  ],
  scale: [
    { value: .8, duration: 0, elasticity: 0,delay: 0, },
    { value: 2, duration: 1500, elasticity: 0, delay: 0,  easing: [.86,-0.06,.6,.93]},
    { value: .8, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
    { value: .5, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
    { value: .8, duration: 1500, elasticity: 0, delay: 0,   easing: "easeInOutQuad"},
  ],
  zIndex: [
    {value: 1, duration: 0, round: true},
    {value: 3, duration: 3000, round: true},
    {value: 1, duration: 3000, round: true},
  ],
  loop: true,
  autoplay: false,
}

var reacticonsmall;
var jsiconsmall;
var adobeiconsmall;




document && document.addEventListener("visibilitychange", function() {
  startAnimsSmall();
});

function startAnimsSmall(){
  loopAnimSmall.translateX[1].value = xTrans;
  reacticonsmall = anime({
  targets: '#hunterslide .reacticonsmall', ...loopAnimSmall
  });
  jsiconsmall = anime({
  targets: '#hunterslide .jsiconsmall', ...loopAnimSmall
  });
  adobeiconsmall = anime({
  targets: '#hunterslide .adobeiconsmall', ...loopAnimSmall

  });

  reacticonsmall.pause();
  jsiconsmall.pause();
  adobeiconsmall.pause();
  reacticonsmall.seek(0);
  jsiconsmall.seek(2000);
  adobeiconsmall.seek(4000);
  reacticonsmall.play();
  jsiconsmall.play();
  adobeiconsmall.play();
}

};
export default Animes;
