



var Node = (function(){

	
	var count = 0;
	var children = null;
	var end = false;

	return {
		'children': children,
		count: count,
		end: end
	}

});




var Trie = (function(){

	var root = Node();

	function addWord(word){

		var curr = root;

		for(var i = 0;i<word.length;i++){
			
			if(curr.children == null){
				curr.children = {};

				curr.children[word[i]] = Node();
			}else{
				if(curr.children[word[i]] === undefined){
					curr.children[word[i]] = Node();
				}
			}


			curr = curr.children[word[i]];
			curr.count+=1;
		}

		curr.end = true;
	}

	function isPresent(word){

		var curr = root;

		var flag = true;

		for(var i = 0;i<word.length;i++){
			

			if(curr.children === null){
				flag = false;
				break;
			}
			curr = curr.children[word[i]];

			if(curr === undefined || curr === null){
				flag = false;
				break;
			}
		}

		if(flag){
			flag = curr.end;
		}
		return flag;

	}


	function walk(node){
		//console.log(node);
		if(node === undefined) return "";

		if(node.children == null) return [""];
		var words = [];


		for(var ij in node.children){
			
			var word = ij;


			var child_words = walk(node.children[ij]);

			


			for(var j = 0;j<child_words.length;j++){
				words.push(word+child_words[j]);
			}

			var ind = words.findIndex(function(a){return a == word; });



			if(node.children[ij].end &&  ind == -1 ) words.push(word);
			



		}

		//console.log(words);

		return words;

	}

	function getAll(){
		return walk(root);
	}

	function giveWords(word){


		if(root.children[word[0]] === null || root.children[word[0]] === undefined)
			return [];

		var words = [];

		var curr = root;

		for(var i = 0;i<word.length;i++){

			if(curr && curr.children){
				curr = curr.children[word[i]];
			}
		}

		if(curr){
			var child_words = walk(curr);
			for(var j = 0;j<child_words.length;j++){
					words.push(word+child_words[j]);
			}
		}

		return words;
	}


	return {
		addWord: addWord,
		root: root,
		isPresent: isPresent,
		giveWords: giveWords,
		getAll: getAll
	};
});
