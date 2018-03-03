function myFunction() {

	var p = prompt("votre mes","");
 document.getElementById("demo").innerHTML = p;
	
}

var para = document.createElement("p");
var node = document.createTextNode("this is nzx");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);


function battribute(){

	var element = document.getElementById("p1").setAttribute("class","haja");

}

function bclass(){
	var element = document.getElementById("p2")
}