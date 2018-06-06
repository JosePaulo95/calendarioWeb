
const dias_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var dias_marcados = [];

function selecionarDiaIndisponivel(id){
	document.getElementById("nota_caixinha").style.display = "inline-block";
	var x = document.getElementsByClassName("nota_msg");
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	}
	document.getElementById("nota_"+id).style.display = "inline-block";
}
function marcarDia(id){
	document.getElementById("nota_caixinha").style.display = "none";
	if(dias_marcados.includes(id)){
		document.getElementById(id).style.backgroundColor = "#DDD";	

		let index = dias_marcados.indexOf(id);
		dias_marcados.splice(index, 1);

		var ul = document.getElementById("dynamic-list");
		var li = document.getElementById("nota"+id);
	    ul.removeChild(li);
	}else{
		document.getElementById(id).style.backgroundColor = "#008000";

		dias_marcados.push(id);

		var ul = document.getElementById("dynamic-list");
	    var li = document.createElement("li");
		li.setAttribute('id',"nota"+id);
	    li.appendChild(document.createTextNode(diaPorExtenso(id)));
	    //li.appendChild(document.createTextNode(dias_marcados.length+". "+diaPorExtenso(id)));
	    ul.prepend(li);
	}
}
function diaPorExtenso(data){
	var data_array = data.split("-");
	var d = new Date(data_array[0],data_array[1]-1,data_array[2]);
	//dias_semana_[(new Date(dm.ano,dm.mes-1,dm.dia)).getDay()]}, {dm.dia} de {this.nomeMes(dm.mes)} de {dm.ano}</Text>
	return dias_semana[d.getDay()]+", "+d.getDate()+" de "+meses[d.getMonth()]+" de "+d.getFullYear();
}
function changeMonth(id_antigo, id_novo){
	document.getElementById("nota_caixinha").style.display = "none";

	document.getElementById(id_antigo).style.display = "none";
	document.getElementById(id_novo).style.display = "block";
}