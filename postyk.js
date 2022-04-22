let shotit = function() {

    html2canvas(document.getElementById('seeText'), {

        onrendered: function(canvas) {
            document.body.appendChild(canvas);
            leCanvas = document.getElementsByTagName("canvas")[0];
            let img = leCanvas.toDataURL("image/png");
            document.write('<br><br><span style="font:14px normal Helvetica, Arial; font-weight: bold; color:#13a6f5; margin-left:16px">Это Ваш скриншот. Нажав, можете сохранить как картинку. Чтобы вернуться, обновите страницу браузера:</span> <br><br> <img src="' + img + '"/>');
        },
        /*width: 390,
        height: 220*/
    });
}


let header = document.getElementById('header');
let section = document.getElementById('section');
let style = document.getElementById('style');

header.innerHTML = `<h1>Postyk with Note & Editor</h1>
<h2>Открыть файл как текст с расширением: .txt; .html; .js; .svg; для чтения и редакции</h2>`;
section.innerHTML = `
<hr>
<form action="">
<br>
<input id="text1" type="file">

<input id="save" type="button" value="Сохранить на Диск" >
<br>
<br>
<br>
<hr>
<br>
<label for="">

1. Введите текст на любом языке и нажмите 'OK':

</label>
<br>
<hr>
<br>
<textarea id="text"></textarea>
<br>
<hr>
<br>
<button type="button" id="inputText">Как выглядит ваш текст? "OK"</button>
<br>
<hr>
<br>
<hr>
<br>
<p>Вот так Как выглядит ваш текст:</p>
<div id = 'seeText'>
</div>
<br>
<hr>

  <label for="">
            
2. Чтобы поменять цвет фона, нажмите на "цвет", настройте его и нажмите "ok":

</label>
<br>
<hr>
<br>
<input type="color" id="body background" name="favcolor" value="#ffffff">
<br>
<hr>
<br>
<button type="button" id = "Background">OK</button>
<br>
<hr> 
<br>
<label for="">

3. Поменять размер текста, движением ползунка от -> 18px -> 80px:

<label>
<br>
<hr>
<br>
<input type="range" min="18" name="a" max="80" value="18" step="2" id="font size" >
<!--output name="x" for="a b"></output-->
<br>
<hr>
<br>
<button type="button" id = 'changeSize'>OK</button>
<br>
<hr>
<br>
<label for="">

4. Выравнить текст вправо-влево:
         
<label>
<br>
<hr>
<br>
<input type = "range" min='10' max='100' value="10" step='10' id="poziciyaText"  >
<br>
<hr>
<br>
<button type="button" id = 'changePoziciya'>OK</button>
<br>
<hr>
<br>

<label for="">

 5. Чтобы изменить цвет текста нажмите на "цвет", настройте его и нажмите "ok"
         
</label>
<br>
<hr> 
<br>  
<input type="color" id="colorText" name="favcolor" value="#000">
<br>
<hr>
<br>
<button type="button"  id="changeColor">OK</button>
<br>
<hr>
<br>
</form>
<br>
<br>
<hr>

<p id="sov">Ваш пост будет в рамке. Сделайте скриншот, сохраните картинку и поделитесь в соц сетях. </p>


`
let seeText = document.getElementById('seeText');
seeText.innerHTML = `
 <p id="inText"></p>
 <p id ='p1'>©Postyk:)</p>
`;

seeText.style.border = 'thick double #041b24c4';

style.innerHTML = `
body {
	margin:10px;
}
textarea {
	width:100%;
	height:calc(100vh - 100px);
}
input {
/*	margin: 0 0 10px 0;*/
	margin: 2% 0% 0% 0%;
  width:150px;
  height:50px;
}
#save {
	float:right;
}
#body background{

    

    width: 50%;

}   

#text{

    text-align: left;
    font-size: 20px;
    padding:10px 0px 0px 10px;


}



h1, p, #postyk{

text-align: left;
padding:10px 0px 0px 10px

}

h1 {
  
  background: linear-gradient(#29363b, #a9a892);
  color:#ffffff;
  
}

#post {
  
  color:#000000;
  
}

#sov {

color:#042e35;
text-align:center;
  
}

#seeText {

   background:#ffffff; 
  
}

form {

    margin:0% 3% 0% 10%;

}

/*input {
  
  margin: 2% 0% 0% 0%;
  width:50px;
  height:50px;
}*/

button {
  margin: 2% 0% 0% 0%;
  padding: 10px 40px 20px;
  font-size: 18px;
  
}


`

let p1 = document.getElementById('p1');

p1.style.textAlign = 'right';


let footer = document.getElementById('footer');
footer.innerHTML = `
<hr>
<br>
<p>Эта функция работает, но еще далека от совершенства</p>
<br>
<hr>
<br>
<button onClick="shotit()">Сделать скриншот</button>
<br>
<hr>`

let inputText = document.getElementById('inputText');
inputText.onclick = function () {
 
 let text = document.getElementById("text").value;

let inText = document.getElementById("inText");
    inText.innerHTML = text; 
  
}

let background = document.getElementById('Background');
background.onclick = function () {

let bodyBackground = document.getElementById("body background").value;
seeText.style.background = bodyBackground;

}

let changeColor = document.getElementById('changeColor');
changeColor.onclick = function() {
  
  let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;
  
}

let changeSize = document.getElementById('changeSize');
changeSize.onclick = function() {
  
  let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize + "px";
  
}

let changePoziciya = document.getElementById('changePoziciya');
changePoziciya.onclick = function () {

let poziciyaText = document.getElementById("poziciyaText").value;
 inText.style.paddingLeft = poziciyaText + 'px';

}


let saveFile = document.getElementById('save');
saveFile.onclick = download;

function download() {
    var link = document.createElement('a');
    var str = document.getElementById("text").value;
    str = str.split("\u000A").join("\u000D\u000A");
    bl = new Blob([str]);
    link.href = URL.createObjectURL(bl);
    if (document.getElementById("text").name != "") {
        link.download = document.getElementById("text").name;
    } else {
        link.download = "text.txt";
    }
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}
//Открыть файл
let text1 = document.getElementById('text1');
text1.onchange = function() { readfile(this.files) };

function readfile(files) {
    var text = files[0];
    document.getElementById("text1").name = text.name;
    console.dir(text);
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("text").value = e.target.result;
    };
    reader.readAsText(text);
}

/*window.onload = function() {
    let openFile = document.getElementById('openFile');
    let seeFile = document.getElementById('seeFile');

    openFile.addEventListener('change', function(e) {

        let file = openFile.files[0];
        let textType = /svg.;


        if (file.type.match(textType)) {

            let reader = new FileReader();

            reader.onload = function(e) {

                seeFile.innerHTML = reader.result;

            }

            reader.readAsText(file);
        } else {
            seeFile.innerText = "File not supported!"
        }

    });
}*/
