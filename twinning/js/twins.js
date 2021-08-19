//handles keeping track of index of last image
var lastIndex = 0;

var templates = [
	['n','Can','v'],
	['n','n'],
	['vg'],
	['ad'],
	['av'],
	['n','Takes','n'],
	['ad','av'],
	['As long as we\'re','av'],
	['Double the','n'],
	['n','Vision'],
	['Wearing matching outfits with your','n'],
	['We','v','n','av'],
	['n','Of The Day'],
	['Get ready','n'],
	['Hit us up on @cameo for a personalised video.'],
	['The','ad','n'],
	['Seeing','n'],
	['n','is our','n'],
	['Twins are twice the','n'],
	['n','Made','n'],
	['It\'s a','n','thing'],
	['ad','and','ad'],
	['It\'s called a','vg','n'],
	['n','is','n'],
	['n','is never','av'],
	['n','to','v'],
	['TOUCH IT'],
	['av','ad'],
	['av','a','n'],
	['vg','is','vg'],
	['We create our own','n'],
	['av','ad','av'],
	['n','is what you do with it'],
	['Wait a minute..... it\'s the','n','!!!!'],
	['n','work makes the','n','work'],
	['We make a nice','n']
];

var emojis = [
	'\u{1F44F}', 	//👏
	'\u{1F46F}', 	//👯
	'\u{1F46D}', 	//👭
	'\u{1F603}', 	//😃
	'\u{1F9E1}', 	//🧡
	'\u{1F49B}', 	//💛
	'\u{1F49A}',	//💚
	'\u{1F499}',	//💙
	'\u{1F49C}',	//💜
	'\u{1F457}',	//👗
	'\u{1F44D}'		//👍
];

//n
var nouns = [
	'Two',
	'Love',
	'Twin',
	'It',
	'Queen',
	'Best Friend',
	'Everything',
	'Outfit',
	'Australia',
	'Pair',
	'Double',
	'Fashion',
	'Art',
	'Fun',
	'Joy',
	'Moment',
	'One',
	'Team',
	'Cuteness',
	'Style',
	'Twins',
	'Dream'
];

//vg
var verbing = [
	'Twinning',
	'Doubling',
	'Winning',
	'Seeing'
];

//ad
var adjective = [
	'Perfect',
	'Inseparable',
	'Better',
	'Classy',
	'Fabulous',
	'Doubled',
	'Cute',
	'Stronger',
	'Sweet',
	'Sisterly'
];

//av
var adverb = [
	'Together',
	'Doubled',
	'Enough',
	'Always',
	'Sisterly'
];


//v
var verbs = [
	'Play',
	'Do',
	'Love',
	'Twin',
	'Double',
	'Live',
	'Win',
	'Style'
];

function fillTemplate(templateNum){
	var currTemplate = templates[templateNum];
	var filledTemplate = "";

	for (let i = 0; i < currTemplate.length; i++){
		if(currTemplate[i] == "n")
			filledTemplate += nouns[Math.floor(Math.random() * nouns.length)]
		else if (currTemplate[i] == "vg")
			filledTemplate += verbing[Math.floor(Math.random() * verbing.length)]
		else if (currTemplate[i] == "ad")
			filledTemplate += adjective[Math.floor(Math.random() * adjective.length)]
		else if (currTemplate[i] == "av")
			filledTemplate += adverb[Math.floor(Math.random() * adverb.length)]
		else if (currTemplate[i] == "v")
			filledTemplate += verbs[Math.floor(Math.random() * verbs.length)]
		else
			filledTemplate += currTemplate[i]
		filledTemplate += " ";
	}

	var coinFlip = Math.floor(Math.random());
	
	if (coinFlip > .6)
		filledTemplate.toUpperCase();

	var emojiCount = Math.floor(Math.random() * 4)+1;

	for (let i = 0; i < emojiCount; i++)
		filledTemplate += emojis[Math.floor(Math.random() * emojis.length)]

	return filledTemplate;
}

function newCaption(){

	//lets first get a random image

  var theImage = document.getElementById('myimage');
  var imgDir = 'img/';
  var imgArray = ['cursedDolls.png','bAndR.jpg','mallards.jpg','al1.png','al2.png','al3.png','al4.png', 's1.jpg', 'w1.jpg', 'beastar.jpg', 'mka.jpg', 'zc.jpg', 'tt.png', 'hellokitty.jpg', 'spiderman.jpg', 'mario.png', 'rocket.jpg', 'bert.jpg', 'mirror.jpg', 'al5.png'];
  var imgIndex = 0;
  do {
  	imgIndex = Math.floor(Math.random() * imgArray.length);
  } while (imgIndex == lastIndex);
  lastIndex = imgIndex;
  var imgPath = imgDir + imgArray[imgIndex];
	theImage.src = imgPath;
	theImage.alt = imgArray[imgIndex];

	//next, let's get the like count
	document.getElementById('likeCount').innerHTML = (Math.floor(Math.random() * 2000)+1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

	//finally, we can handle the caption!

	var randNum = Math.floor(Math.random() * templates.length);
	document.getElementById('instaCaption').innerHTML = fillTemplate(randNum);
}

window.onload = function() {
  newCaption();
}