var input = document.getElementById("input");
var output = document.getElementById("output");
var output_p = document.getElementById("output_p");
var clear = document.getElementById("clear");
var switchBtn = document.getElementById("switch");
var heading = document.getElementById("heading");
var main = document.getElementById("main");
var codeBox1 = document.getElementById("code-box-1");
var codeBox2 = document.getElementById("code-box-2");
var exampleBinary ="Binary"/* "01010100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01101101 01111001 00100000 01100110 01101001 01110010 01110011 01110100 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01110011 01100101 01101110 01110100 01100101 01101110 01100011 01100101 00101110"*/;
var exampleText = "Text"/*"This is my first binary sentence."*/;

heading.innerHTML = "Binary to Text Converter";
codeBox1.innerHTML = exampleBinary;
codeBox2.innerHTML = exampleText;

switchBtn.addEventListener("click", function() {
  if (main.dataset.mode == "inputBinary") {
    main.dataset.mode = "inputText";
    heading.innerHTML = "Text to Binary Converter";
    input.value = "";
    output.innerHTML = "";
    output_p.innerHTML="";
   codeBox1.innerHTML = exampleText;
    codeBox2.innerHTML = exampleBinary;
  } else {
    main.dataset.mode = "inputBinary";
    heading.innerHTML = "Binary to Text Converter";
    input.value = "";
    output.innerHTML = "";
    output_p.innerHTML = "";
    codeBox1.innerHTML = exampleBinary;
    codeBox2.innerHTML = exampleText;
  }
});

clear.addEventListener("click", function() {
  input.value = "";
  output.innerHTML = "";
  output_p.innerHTML = "";
});

//listen for user input
//run input through functions
//place result in output
input.addEventListener("input", function() {
  var userInput = input.value;
  if (main.dataset.mode == "inputBinary") {
    output.innerHTML = binaryAgent(userInput.toString());
    output_p.innerHTML = binaryAgent(userInput.toString());
  } else {
    output.innerHTML = textAgent(userInput.toString());
    output_p.innerHTML = textAgent(userInput.toString());
  }
});

//the function to convert binary to a word
function convertBinWord(binCode) {
  var binArr = binCode.split("");
  binArr = binArr.reverse();
  var tally = 0;

  for (i = 0; i < binArr.length; i++) {
    //two to the power of position
    //times current integer
    //add to total
    tally += binArr[i] * Math.pow(2, i);
  }

  var letter = String.fromCharCode(tally);
  return letter;
}

//the function to convert binary to string
function binaryAgent(str) {

  var binSentenceArr = str.split(" ");
  var finalSentenceArr = [];

  for (j = 0; j < binSentenceArr.length; j++) {
    var binWord = binSentenceArr[j];
    var word = convertBinWord(binWord);
    finalSentenceArr.push(word);
  }

  var sentence = finalSentenceArr.join("");
  return sentence;
}

//function to convert string to binary
function textAgent(str) {
  var charArr = str.split("");
  var binArr = [];
  var tally = 0;
  
  for (i=0;i<charArr.length;i++) {
    var charCode = charArr[i].charCodeAt(0);
    var binary = charCode.toString(2);
    binArr.push(binary);
  }
  
  return binArr.join(" ");
}

/*---ФУНКЦИЯ КОПИРОВАНИЯ---*/
function copyToClip(){
  var text = document.getElementById("output");
  text.select();
  document.execCommand("Copy");
  console.log("copied");
}

/*---ФУНКЦИЯ сохранить/открыть--*/
function download(){
	var link = document.createElement('a');
	var str = document.getElementById("input").value;
	str = str.split("\u000A").join("\u000D\u000A");
	bl = new Blob([str]);
	link.href = URL.createObjectURL(bl);
	if (document.getElementById("text").name!=""){
		link.download = document.getElementById("text").name;
	} else {
		link.download = "text.txt";
	}
	var e = new MouseEvent("click");
	link.dispatchEvent(e);
}
/*---ФУНКЦИЯ ОТКРЫТЬ ФАЙЛ---*/
function readfile(filelist){
	var text = filelist[0];
	document.getElementById("text").name=text.name;
	console.dir(text);
	var reader = new FileReader();
	reader.onload = function(e) {
    document.getElementById("input").value = e.target.result;
  };
  reader.readAsText(text);
}

/*---ФУНКЦИЯ СОХРАНИТЬ ФАЙЛ-РЕЗУЛЬТАТ---*/
function download(){
	var link = document.createElement('a');
	var str = document.getElementById("output").value;
	str = str.split("\u000A").join("\u000D\u000A");
	bl = new Blob([str]);
	link.href = URL.createObjectURL(bl);
	if (document.getElementById("text").name!=""){
		link.download = document.getElementById("text").name;
	} else {
		link.download = "text.txt";
	}
	var e = new MouseEvent("click");
	link.dispatchEvent(e);
}