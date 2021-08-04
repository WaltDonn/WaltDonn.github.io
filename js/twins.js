var templates [
	['n','Can','v'],
	['n','n'],
	['vg'],

	['',''],
	['','']
];

var emojis ['👏', '👯', '👭', '😄'];

var nouns [
	'Two',
	'Love',
	'Twin'
];

var verbing [
	'Twinning'
];

var verbs [
	'Play'
];



function fillTemplate(templateNum){
	var currTemplate = templates[templateNum];
	//code for filling out template with words here

	//emojis added at random?
	//all caps at random?
}

function newCaption(){
	var randNum = Math.floor(Math.random() * emojis.lengths);//templates.length);
	document.getElementById('instaCaption').innerHTML = emojis[randNum];//fillTemplate(randNum);
}