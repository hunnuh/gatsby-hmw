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
      { value: 480, duration: 3000, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
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




//-----------------------------------MEDIUM


var loopAnim = {
  translateX: [
    { value: 30, duration: 0, elasticity: 0,delay: 0, },
    { value: 480, duration: 3000, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
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




//-----------------------------------LARGE


var loopAnim = {
  translateX: [
    { value: 30, duration: 0, elasticity: 0,delay: 0, },
    { value: 480, duration: 3000, elasticity: 0, delay: 0,  easing: "easeInOutQuad"},
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
  console.log("ASDFASDFASDF")
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

};
export default Animes;
