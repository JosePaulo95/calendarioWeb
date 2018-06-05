
var dias_marcados = [];

function changeColor(id)
{
  	document.getElementById(id).style.color = "#ff0000"; // forecolor
  	document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
}
function marcarDia(id){
	if(dias_marcados.includes(id)){
		document.getElementById(id).style.backgroundColor = "#DDD";	

		let index = dias_marcados.indexOf(id);
		dias_marcados.splice(index, 1);

		var ul = document.getElementById("dynamic-list");
		var li = document.getElementById("nota"+id);
	    ul.removeChild(li);
	}else{
		document.getElementById(id).style.backgroundColor = "rgb(0,250,0)";

		dias_marcados.push(id);

		var ul = document.getElementById("dynamic-list");
	    var li = document.createElement("li");
		li.setAttribute('id',"nota"+id);
	    li.appendChild(document.createTextNode(id));
	    ul.prepend(li);
	}
}
function changeValue(id)
{
  	document.getElementById("myid").innerHTML = "funfa";
}

function changeMonth(id_antigo, id_novo){
	document.getElementById(id_antigo).style.display = "none";
	document.getElementById(id_novo).style.display = "block";
}