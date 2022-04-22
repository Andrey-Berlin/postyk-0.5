var test = "bluh";

function stringToEntities(s){
  var output = "";
  for (i = 0; i < s.length; i++){
    output += "&amp;#" + s.charCodeAt(i) + ";";
  }
  return output;
}

function newTextIsHere(){
  var input = document.getElementById("in").value;
  console.log(input);
  document.getElementById("out").innerHTML = stringToEntities(input);
}

function copyToClip(){
  var text = document.getElementById("out");
  text.select();
  document.execCommand("Copy");
  console.log("copied");
}

/*---ФУНКЦИЯ сохранить/открыть--*/
function download(){
	var link = document.createElement('a');
	var str = document.getElementById("out").value;
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
    document.getElementById("in").value = e.target.result;
  };
  reader.readAsText(text);
}

/*---ФУНКЦИЯ СОХРАНИТЬ ФАЙЛ-РЕЗУЛЬТАТ---
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
}*/