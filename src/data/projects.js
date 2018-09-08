const Projects =[ //coding
    {
      src: "../programming/cleanup.gif",
      title: "NewsCaster CLEANUP",
      desc: {
        p:[" NewsCaster CLEANUP was an in-house CRUD application designed to dynamically parse the NewsCaster Database, detect the folder architecture of the NewsCaster, and look for issues with the clip library such as orphaned clips. It generates a report, and gives the user the ability to delete the problem files from the system.",
        " I developed NewsCaster CLEANUP independently, using the powerful JavaScript technology called Electron. After this project, my JS skills were rather robust; I could set up and use Node (and its fs module), advanced ES6 techniques like async/await, and build React apps from scratch.",
        " Because of NC CleanUp, the NewsMaker development team was able to increase the volume of their workflow as well as identify previously unnoticed bugs in the NewsCaster Media Manager."
        ],
        tech:[
          {name:"NodeJS", link:"https://nodejs.org/en/", color:"terminal-green"},
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Electron", link:"https://electronjs.org/", color:"lightest-blue"},
        ]
      },
      date: "2017",
      snippets:[{name: "parseConfig( )", snippet:
`function parseConfig(){ //get and parse newscastersite file
    return new Promise(function (fulfill, reject){
        fs.access(siteconfig, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        con.log(err ? 'no site!' : 'found siteconfig');
		if (err) return reject(err);
        });
        let parser = new xml2js.Parser({mergeAttrs: true});
        fs.readFile(siteconfig, function(err, data) {
            parser.parseString(data, function (err, result) {
                let newsdefine = result.site.define;
                function findncshare(object) { return object.key == '%newscasterShare';}
                function findmdshare(object) { return object.key == '%mediaShare';}
                function findmosid(object) { return object.key == '%mosid';}
                function findncserver(object) { return object.key == '%newscasterServer';}
                //find roots
                mediashare = newsdefine.find(findmdshare).value.toString();
                newscastershare = newsdefine.find(findncshare).value.toString();
                newscasterserver = newsdefine.find(findncserver).value.toString();
                mosid = newsdefine.find(findmosid).value.toString();
                database = "C:\\NewsCaster\\Database\\"" + mosid + ".xml";
                proxyroot = "\\\\" + newscasterserver + "\\Proxies\\""

                fs.access(newscastershare, fs.constants.R_OK | fs.constants.W_OK, (err) => {
                    if (err) return reject(err);
                });
                let mediascanner = result.site.mediaScanner[0].mediaFolder;

                for (let i=0; i < mediascanner.length; i++){
                  let fullpath = mediascanner[i].destination.toString()
                  let index = fullpath.indexOf(''\\'')
                  let path = fullpath.slice(index);
                  //compare logic for root alias
                  let isMedia = fullpath.indexOf('mediaShare') >= 0 ? true : false;
                  let isNews = fullpath.indexOf('newscasterShare') >= 0 ? true : false;
                  let isRoot = fullpath.indexOf('newscasterRoot') >= 0 ? true : false;
                  if (mediascanner[i].type == 'FILE'){
                    //push paths of hi res and playouts to arrays
                    watchfolders.push(mediascanner[i]['_'].toString());
                    if (isNews){
                      let playout = newscastershare.concat(path);
                      hiresfolders.push(playout);
                    }
                    else if (isMedia){
                      let playout = mediashare.concat(path);
                      hiresfolders.push(playout);
                    }
                    else if (isRoot){
                      let playout = newscasterroot.concat(path.substr(1));
                      hiresfolders.push(playout);
                    }
                    else{
                      hiresfolders.push(fullpath);
                    }
                  }
                  else{

                    //push proxy path to array
                    if (isNews){
                      let proxy = newscastershare.concat(path);
                      proxyfolders.push(proxy);
                    }
                    else if (isMedia){
                      let proxy = mediashare.concat(path);
                      proxyfolders.push(proxy);
                    }
                    else if (isRoot){
                      let proxy = newscasterroot.concat(path.substr(1));
                      proxyfolders.push(proxy);
                    }
                    else {
                      proxyfolders.push(fullpath);
                    }
                  }
                };
                if (err) return reject(err);
                fulfill('siteconfig parsed successfully');
                con.log('siteconfig parsed successfully')
              });
            });
          });
        };`},
        {
  name: "clipSelection.js", snippet: `function selectclip(item){
	item.classList.add("selected");
	item.addEventListener("click", function deselect(){
		deselectclip(item);
		item.removeEventListener("click", deselect, false)
		}, false);
	selectedclips.push(item.id);
	con.log(selectedclips);
}

function deselectclip(item){
	item.classList.remove("selected");
	let index = selectedclips.indexOf(item.id);
	selectedclips.splice(index, 1);

	item.addEventListener("click", function select() {
		selectclip(item);
		item.removeEventListener("click", select, false);
	}, false);
}`},
{
  name: "countClips( )", snippet: `const hr_count = async () => {
	con.log("counting_hr...")
	for (let i=0; i < hiresfolders.length; i++){
		await new Promise(function(fulfill, reject){
			let path = hiresfolders[i];
			let loop = false;
			fs.readdir(path, function(err, items) {
				for (let j=0; j<items.length; j++) {
					if (items[j] != 'Thumbs.db'){
						let file = path + 'backslash' + items[j];
						hrclips.push(file);
					}
					if (j == (items.length-1)){
						loop=true;
					}
				}
				if (err) return reject(err);
				if (loop) {
					fulfill('done');
				}
			});
		});
	};
};`}
]
    },

    {
      src: "../programming/poker.gif",
      title: "Hunter's Poker",
      desc: {
        p:[
          " Hunter's Poker is a React-based draw poker game. I made Hunter's Poker as a means to convince YOU (yes, you) that I have the webdev chops to produce a polished and engaging interactive interface.",
          " Hunter's Poker implements the Fisher-Yates shuffle algorithm to generate a new virtual deck for each hand. Each player is dealt five cards and then they are given a chance to hold up to all five. Players are dealt remaining cards and then the hands are scored, compared, and a winner is delcared. Your opponent's AI is basic, but employs a winning long-term strategy. He always go for the flush!",
          " If you can play 20 hands of this game and have a win percentage over 50%, maybe you should try that luck in Las Vegas!",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Tachyons", link:"http://tachyons.io/", color:"white"},
          {name:"Howler", link:"https://howlerjs.com/", color:"green"},
          {name:"Bluebird", link:"http://bluebirdjs.com/docs/getting-started.html", color:"blue"},
        ],
        plug:{
          text:"Click the POKER button at the top of your screen to play Hunter's Poker."
        }
      },
      date: "2017",
      snippets:[{name: "declareWinner( )", snippet:
`function declareWinner(){
    let {playerhand, hunterhand, score} = this.state;

    this.startMessage()
    winnerPromise = new Promise((resolve, reject) => {

      let {playerhand, hunterhand, score} = this.state;
      let newScore = Object.assign({}, score)

      let winningPlayerHand = Object.assign({}, playerhand)
      let winningHunterHand = Object.assign({}, hunterhand)
      winningHunterHand.float = winningHunterHand.hand.arr;
      winningPlayerHand.float = winningPlayerHand.hand.arr;

      function playwinsound(){
        if (Math.random() < .5){
          soundbank.bell2.play()
        }
        else{
          soundbank.bell1.play()
        }
      }
      function playlosesound(){
        soundbank.buzz.play()
      }
      if (playerhand.hand.score !== hunterhand.hand.score ){
        if(playerhand.hand.score > hunterhand.hand.score){
          newScore.player++;
          playwinsound();
          this.setState(
            { winner:"player",
              score: newScore,
              playerhand:winningPlayerHand
            },
          resolve(true))
        }
        else{
          newScore.hunter++;
          playlosesound();
          this.setState(
            { winner:"hunter",
              score: newScore,
              hunterhand:winningHunterHand
            },
          resolve(true))
        }
      }
      //if tie
      if (playerhand.hand.score === hunterhand.hand.score ){
        for (let i=0; i < 5; i++){
          if (playerhand.hand.high[i] > hunterhand.hand.high[i]){
            newScore.player++;
            playwinsound();
            this.setState({
              winner:"player", score:newScore, playerhand:winningPlayerHand
            }, resolve(true))
            return
          }
          else if(playerhand.hand.high[i] === hunterhand.hand.high[i]){
            i == 4 ? this.setState({winner:"tie"}, resolve(true)) : null;
          }
          else{
            newScore.hunter++;
            playlosesound();
            this.setState({
              winner:"hunter", score:newScore, hunterhand:winningHunterHand
            }, resolve(true))
            return
          }
        }
      }
    })
    return winnerPromise
  }`},
  {name:"handEvaluator.js",
  snippet: `var hand = [];
var valuesArray = [];
var suitsArray = [];
let highCard = null;
let pairs = null;
let pairStrings = null;
let valuesNumeric = null;

// given a value "n", returns the number of occurrences of "n" in "hand" array. Useful to know how many "two"s or "three"s and so on we have on a hand
function occurrencesOf(n){
     let count = valuesArray.filter(x => x == n ).length;
     return count;
}

// thanks to occurrencesOf, this function returns a string with the combination of duplicate cards.
// If you have "Four of a Kind" it will return "4", if you have "Three of a kind" il will return "3",
// if you have "Full House" it will return "32" or "23" and so on.
function duplicateCards(){
  var occurrencesFound = [];
  var result = "";

  for(var i = 0; i < valuesArray.length; i++){
    var occurrences = occurrencesOf(valuesArray[i]);
    if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){
     result += occurrences;
     occurrencesFound.push(valuesArray[i]);
    }
  }
  pairStrings = occurrencesFound;
  pairs = occurrencesFound.map(
    x => {
      if (x == "J"){
        return 11
      }
      else if (x == "Q"){
        return 12
      }
      else if (x == "K"){
        return 13
      }
      else if (x == "A"){
        return 14
      }
      else {
        return Number(x)
      }
    }
  ).sort((a,b) => b-a);
  return result;
}

// this function will return the lowest number in a hand. Useful to check for straights
function getLowest(){
    return Math.min(...valuesNumeric)
}

// we have a straight when starting from the lowest card we can find an occurrence of lowest card +1, +2, +3 and +4
function isStraight(){
   var lowest = getLowest();
   for(var i = 1; i < 5; i++){
      if(valuesNumeric.filter((x) => x == (lowest + i)).length != 1){
           return false
      }
   }
   return true;
}

// we have an ace straight when you have 10 (9), J (10), Q (11), K (12) and A (0)
function isAceStraight(){
  var lowest = getLowest();
   if(lowest!==10){
     return false
   }
   else{
     for(var i = 1; i < 5; i++){
        if(valuesNumeric.filter((x) => x == (lowest + i)).length != 1){
             return false
        }
     }
   }
   return true;
}

// we have a flush when all items in suitsArray have the same value
function isFlush(){
     for(var i = 0; i < 4; i ++){
          if(suitsArray[i] != suitsArray[i+1]){
               return false;
          }
     }
     return true;
}



// main function to check the hand
export default function checkHand(evalhand){

  hand = evalhand.cards;
  valuesArray = evalhand.vals
  suitsArray = evalhand.suits

  let valuedhand ={
    desc: "",
    high: [],
    score: 0,
    arr:[]
  }

  valuesNumeric = valuesArray.map(
    x => {
      if (x == "J"){
        return 11
      }
      else if (x == "Q"){
        return 12
      }
      else if (x == "K"){
        return 13
      }
      else if (x == "A"){
        return 14
      }
      else {
        return Number(x)
      }
    }
  )

  highCard = valuesNumeric.map(x => x);
  highCard.sort((a,b) => b-a);


  switch(duplicateCards()){
    case "2":
         valuedhand.desc = "Pair of " + pairStrings[0] + "'s";
         valuedhand.score = 13 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
         break;
     case "22":
         valuedhand.desc = "Two Pairs";
         valuedhand.score = 25 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x => x === pairs[0] ? true : x === pairs[1] ? true : false
         )
         break;
    case "3":
         valuedhand.desc = "Three of a Kind";
         valuedhand.score = 38 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
         break;
    case "23":
    case "32":
         valuedhand.desc = "Full House";
         valuedhand.score = 68 + pairs[0];
         valuedhand.arr = new Array(5).fill(true);
         //console.log(valuedhand.arr)
         break;
    case "4":
         valuedhand.desc = "Four of a Kind";
         valuedhand.score = 81 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
         break;
    default:
        if(!isAceStraight() && isStraight()){
          valuedhand.arr = new Array(5).fill(true);
          if(isFlush()){
            valuedhand.desc = "Straight Flush"
            valuedhand.score = 90 + highCard[0];
          }
          else{
            valuedhand.desc = "Straight";
            valuedhand.score = 47 + highCard[0];
          }
        }
        if(isAceStraight()){
          valuedhand.arr = new Array(5).fill(true);
          if(isFlush()){
            valuedhand.desc = "ROYAL FLUSH OMG OMG 1 in 80,000 CHANCE"
            valuedhand.score = 90 + highCard[0];
          }
          else{
            valuedhand.desc = "Ace Straight";
            valuedhand.score = 47 + highCard[0];
          }
        }
        break;
  }
  if(!isStraight() && isFlush()){
    valuedhand.desc = "Flush";
    valuedhand.score = 56 + highCard[0]
    valuedhand.arr = new Array(5).fill(true);
  }

  //no hand, high card
  if(!valuedhand.desc){
    valuedhand.desc = "";
    valuedhand.score = highCard[0]
    if (highCard[0] < 9){
      valuedhand.arr=new Array(5).fill(false);
    }
    else{ //take nothing
      valuedhand.arr = valuesNumeric.map(
        x =>  x === highCard[0] ? true : false
      )
    }

  }

  valuedhand.high = highCard;

  return valuedhand;

}
`}, {name: "Pokerhand.js", snippet:`import React from 'react';
import {Card} from './Card.js'

let handcontainer = null;
let handcontainerheight = null;

export class Hand extends React.Component {
  constructor(props){
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = {cardwidth:0}
  };

  componentDidUpdate(){
    let {index, id} = this.props
    let cardlist = [...document.querySelectorAll(".card")];
    let sliderheight = document.getElementsByClassName("card-slider")[0].clientHeight;
    let cardheight = document.getElementsByClassName("card")[0].clientHeight;
    let dist = sliderheight-cardheight;



    cardlist.forEach( //handles card transforms
      (card, index) => {
        if (card.classList.contains("held")){
          if (card.classList.contains("flipped")){
            card.style.transform="translateY("+dist+"px) rotateY( 180deg )";
          }
          else{
            card.style.transform="translateY("+dist+"px)";
          }
        }
        else if(card.classList.contains("flipped")){
          card.style.transform="rotateY( 180deg )";
        }
        else{
          card.style.transform=""
        }
      }
    )
  }

  componentDidMount(){
    handcontainer = document.getElementById("hand-container");
    handcontainerheight = handcontainer.clientHeight;
    let cardwidth = Math.floor(handcontainer.clientHeight * .5764)
    this.setState({cardwidth:cardwidth})
    if(this.props.echoSize){
      this.props.echoSize(cardwidth);
    }
    window.addEventListener('resize', this.handleResize);
  }

  handleResize(e) {

    let resizeTimeout;

    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        handcontainerheight = handcontainer.clientHeight;
        let cardwidth = Math.floor(handcontainer.clientHeight * .5764)
        this.setState({cardwidth: cardwidth});
        if(this.props.echoSize){
          this.props.echoSize(cardwidth);
        }
      }, 66);
    }
  }

  render() {
    let {flipped, held, cards, float, id} = this.props.hand;
    let {holdCard, enableClick} = this.props;

    let cardarray = cards.map((cards, index)=>
      <Card
        id = {id + index.toString()}
        key = {index}
        width = {this.state.cardwidth}
        flipped={flipped[index]}
        held={held[index]}
        card={cards}
        floating={float[index]}
        holdCard={enableClick ? () => holdCard(index) : () => null}
      />
    )

    return(

      <div className="h-100 w-100 flex flex-row justify-center">
        {cardarray}
      </div>
    )
  }
}`

}]
    },
    {
      src: "../programming/portfolio.gif",
      title: "Portfolio 2017",
      desc: {
        p:[
          " I made the image browser you are currently using to display my challengingly varied and volumetric portfolio. In addition to the actual contents of this portfolio, I wanted to show off my flourishing React abilities by creating an interactive browser.",
          " A portion of the work on this browser was spent processing the numerous digital assets I've made during my career, selecting the best ones, and re-saving them in a compact web-friendly format.",
          " Thank you for viewing my portfolio! I hope you are enjoying your visit as much as I have enjoyed my career thus far.",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Tachyons", link:"http://tachyons.io/", color:"white"},
        ],
      },
      date: "2017",
      snippets:[{name: "preloadImages( )", snippet:
    `function preloadImages(srcs) {
    var count = 0;
    const countup = num => this.setState({ loadedCount: num});
    function loadImage(src, index) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              count++;
              countup(count);
              resolve(img);
            };
            img.onerror = img.onabort = function() {
              reject(src);
            };
            img.src = src;
        });
    }
    var promises = [];
    for (var i = 0; i < srcs.length; i++) {
        promises.push(loadImage(srcs[i], i));
    }
    return Promise.all(promises);
    }

    function activatePreload(){
    if (!this.state.loading){
      this.preloadImages(bgPaths)
        .then(
          (imgs) =>
          this.setState({
            loading:false,
            loadingViewOn:false,
            imageView:true,
            color: "orange",
            background:"woven"
          }), (errImg) => alert(errImg)
        )
        .then(this.setState({loadingText:"LOADING", loading:true}));
    }
    }`},
        {name: "handleImgTransition( )", snippet:

         `function handleImgTransition(direction) {
    let {images} = this.props;
    let {currentSetIndex} = this.state;
    let imageset = images[currentSetIndex];
    let length = imageset.length -1;

    if (direction === 'prev' && this.state.currentImgIndex > 0) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: prevState.currentImgIndex - 1};
      });
    }
    else if (direction === 'prev' && this.state.currentImgIndex === 0) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: length};
      });
    }
    else if (direction === 'next' && this.state.currentImgIndex !== length) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: prevState.currentImgIndex + 1};
    });
    }
    else if (direction === 'next' && this.state.currentImgIndex === length) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: 0};
      });
    }
    }`},
    ]
      },
    {
      src: "../programming/bardo.gif",
      title: "BARDO: The Savior",
      desc: {
        p:[
          " Bardo won 1st place in Games at the 2017 CSUN Multimedia Showcase.",
          " Bardo the Savior is a 10-20 minute original point-and-click adventure game. Modelled after classic Humongous Entertainment inc. games such as Pajama Sam and Freddi Fish, Bardo moves the format into a new era with a completely browser-based form factor.",
          " This was one of my first major JavaScript programming projects. With hindsight, it was incredibly ambitious and took me from beginner to intermediate quicker than any online course did. Bardo includes three seperate puzzles, a dynamic event scripting system, custom sprite-based animation, a dynamic dialogue system, and a custom inventory system. I also wrote my own photoshop script to take animations and spread them out into enormous sprite sheets.",
        ],
        tech:[
          {name:"Sprite.ly", link:"http://spritely.net/", color:"green"},
          {name:"jQuery", link:"https://jquery.com/", color:"blue"},
          {name:"CreateJS", link:"https://createjs.com/", color:"yellow"},
        ],
        plug:{
          link:"http://www.huntermaverickwells.com/img/portfolio/coding/bardo/bardo.html",
          text:"Click here to play Bardo. (Not optimised for mobile)"
        }
      },
      date: "2016",
      snippets:[{name: "dialogueSystem.js", snippet:
`function spawnDialogueBox(){

	//Make textbox
	var textbox = document.createElement("div");
	textbox.id = "textbox";
	textbox.style.zIndex = 5000;
	gameWindow.appendChild(textbox);


	//Put wrapper inside of it
	var textwrap = document.createElement("div");
	textwrap.id = "textwrap";
	textbox.style.zIndex = 5100;
	document.getElementById("textbox").appendChild(textwrap);
	$('#textwrap').addClass("normal");

	//call it wrap
	wrap = document.getElementById("textwrap");

	createPreventOverlay();
	spawnDialogueboxElements();
}

function spawnDialogueboxElements(){

	//make div for name
	var name = document.createElement("div");
	name.id = "name";
	wrap.appendChild(name);

	//append namediv with text
	name.appendChild(document.createTextNode(speaker[speakerid] + ":"));

	//append break after name
	var br = document.createElement("br");
	wrap.appendChild(br);
	//indent
	for (i = 0; i < 4; i++) {
	wrap.appendChild(document.createTextNode("\u00A0"));
	}
	//setup currline variable --- "lines" is the name of the array holding the current conversation.
	currline = lines[lineid];

	//make next button and listen
	var next = document.createElement("div");
	next.id = "next";
	wrap.appendChild(next);
	next.appendChild(document.createTextNode("Next >>"));
	next.style.visibility = "visible";
	next.addEventListener("click", completeLine);

	//make next button blink
	blinker();

	//call sayline at this speed
	read = setInterval(sayline, readSpeed);
}

function blinker() {
        if(document.getElementById("next"))
        {
            var d = document.getElementById("next") ;
            d.style.color = (d.style.color == 'black'?'white':'black');
            blinkLoop = setTimeout(blinker, 500);
        }
    }

function sayline(){



	if(c < currline.length){

		//append text node for each char of currline string
		wrap.appendChild(document.createTextNode(currline[c]));
		c++;
	}

	else {

		//change completeLine button to nextDia button
		next.removeEventListener("click", completeLine);
		next.addEventListener("click", nextDia);
		//reset c
		c = 0;
		//stop
		clearInterval(read);
		//reset readSpeed
		readSpeed = 60;
	}
}

function completeLine(){

	if(c < currline.length){
		//stop current sayline
		clearInterval(read);
		//start it again faster
		readSpeed -= 60;
		read = setInterval(sayline, readSpeed);
	}
	else {
		//then reset it after the line is done
		readSpeed += 60;
		}
}

function nextDia(){

	if (lineid < lines.length - 1){

		//clear current line
		wrap.innerHTML = "";
		//select next line
		lineid++;
		//select next speaker
		speakerid++;
		//stop the blink
		clearInterval(blinkLoop);
		//spawn the next line and elements
		spawnDialogueboxElements();
	}
	else{
		removePreventOverlay();
		gameWindow.removeChild(textbox);

		//reset line array pointer
		lineid = 0;

		//reset speaker array pointer
		speakerid = 0;

		//advance the plot
		plotId++;
		nextAction();
	}

}
`},{name: "getAnimExitLeft( )", snippet: `function getAnim_Exit_Left (screen, destination){

		var neutralSprite = document.getElementById("neutralSprite");
		var spriteWrap = document.getElementById("spriteWrap")


		var exitleftSprite = document.createElement("div");
		exitleftSprite.id = "exitleftSprite";


		exitleftSprite.setAttribute("class", "fullsprite");
		exitleftSprite.style.backgroundImage = "url('anims/anim" + screen + "_exitleft.png')";

		spriteWrap.appendChild(exitleftSprite);

		$("#neutralSprite").destroy();
		$("#neutralSprite").remove();

		$('#exitleftSprite')
			.sprite({
				fps: 12,
				no_of_frames: 12,
				on_frame: {
					1: function(){
						createPreventOverlay();
					},
					10: function(){
						//alert("11");
						removePreventOverlay();
					},
					11: function(){
						$("#exitleftSprite").destroy();
						$("#exitleftSprite").remove();

						pushNextAction(destination);

					},
				}
			})
		createjs.Sound.play("out");
  }	`},
  {
    name:"activateGate( )", snippet:`else if (plotId == 202){
  		//knock gate down
  		gatedown = true;
  		hitBoxWrap.removeChild(hitbox2);
  		$("#neutralSprite").hide();
  		$('#throwSprite')
  		.show().sprite({
  			fps: 12,
  			no_of_frames: 60,
  			do_once: true,
  			on_frame: {
  				0: function(obj){

  				},
  				1: function(){
  					createPreventOverlay();
  				},
  				11: function(obj){
  					obj.spState(2);
  				},
  				23: function(obj){
  					obj.spState(3);
  				},
  				35: function(obj){
  					obj.spState(4);
  				},
  				46: function(obj){
  					createjs.Sound.play("splat");
  					$('#bridgeSprite')
  					.sprite({
  						fps: 12,
  						no_of_frames: 23,
  						do_once: true,
  						on_frame: {
  							11: function(obj){
  								obj.spState(2);
  							},
  						}
  					});
  				},
  				47: function(obj){
  					obj.spState(5);
  				},
  				56: function(obj){
  					$("#throwSprite").destroy();
  					$("#throwSprite").remove();
  					$("#neutralSprite").show();
  					removePreventOverlay();
  				},
  			}
  		});
   	}`
  }]
    },


  ]

export default Projects;
