


// TODO : Clear this file up.

var a = Trie();

must_words = ['Apple', 'Ball', 'Cow', 'Dog', 'Eagle', 'Fox', 'Goat', 'Hen', 'Ivan', 'Joker', 'Killer','Lemon','Mango', 'Nose','Orange', 'Pick', 'Risk', 'Steave', 'Truck', 'Utopia', 'Van', 'Wheel', 'Xmas', 'Yolo', 'Zen', 'Zeal']

a.addWord('Hello');
a.addWord('Hall');
a.addWord('Hell');
a.addWord('Chaitya');
a.addWord('What');
a.addWord('Mello');
a.addWord('Champ');
a.addWord('Keep');
a.addWord('What is up?');
a.addWord('make it look good');
a.addWord('Apple');
a.addWord('Ball');
a.addWord('Cow');
a.addWord('Dog');


for(var i =0;i<must_words.length;i++){
	a.addWord(must_words[i]);
}


must_words = null;



var suggestions = document.getElementById('suggestions');
var test = document.getElementById('test');


function save(){
	var val = test.value;

	a.addWord(val);
}


function cb(){

	suggestions.innerHTML = '';

	var val = test.value;

	text = "";

	var words = a.giveWords(val);

	text="<ul id='sugList'>";

	for(var i = 0;i<words.length;i++){
		text+="<li>";
		text+=words[i];
		text+="</li>";
		text+="<br/>";
	}

	text += "</ul>"

	suggestions.innerHTML = text;



}
