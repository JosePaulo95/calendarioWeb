
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
	var valor_unt = 50;
	document.getElementById("nota_caixinha").style.display = "none";
	if(!dias_marcados.includes(id)){//marca dia
		document.getElementById(id).style.backgroundColor = "#008000";
		document.getElementById(id).style.color = "#F7F7F7";	

		dias_marcados.push(id);

		var ul = document.getElementById("dynamic-list");
	    var li = document.createElement("li");
		li.setAttribute('id',"nota"+id);
	    
	    var daString="<p class=\"detalheDia\">1. </p> <div style=\"display: inline-block; background-color: #008000; height: 30px;width:170px;\"><select style=\"margin: 5\"><option value=\"1\">1 vaga</option><option value=\"2\">2 vagas</option><option value=\"3\">3 vagas</option><option value=\"4\">4 vagas</option></select><p style=\"display: inline-block;margin-top: -12;color:white;\">= R$ 120,00</p></div>";

	    var iDiv = document.createElement('div');
	    iDiv.innerHTML += daString;

	    li.appendChild(iDiv);
	    ul.prepend(li);

	    document.getElementById("total").innerHTML = "Total: R$ "+(valor_unt*dias_marcados.length)+",00";
	}else{//desmarca dia
		document.getElementById(id).style.backgroundColor = "#F7F7F7";	
		document.getElementById(id).style.color = "#000";	

		let index = dias_marcados.indexOf(id);
		dias_marcados.splice(index, 1);

		var ul = document.getElementById("dynamic-list");
		var li = document.getElementById("nota"+id);
	    ul.removeChild(li);

	    atualizarPrecoTotal();
	}
}
function atualizarPrecoTotal(){
	document.getElementById("total").innerHTML = "Total: R$ "+(valor_unt*dias_marcados.length)+",00";
}
function maisVagas(dropdownVagas){

}
function diaPorExtenso(data){
	var data_array = data.split("-");
	var d = new Date(data_array[0],data_array[1]-1,data_array[2]);
	//dias_semana_[(new Date(dm.ano,dm.mes-1,dm.dia)).getDay()]}, {dm.dia} de {this.nomeMes(dm.mes)} de {dm.ano}</Text>
	return dias_semana[d.getDay()]+", "+d.getDate()+" de "+meses[d.getMonth()]+" de "+d.getFullYear();
}
function changeMonth(id_antigo, id_novo){
	document.getElementById("nota_caixinha").style.display = "none";
	if(id_novo != "calendar-1" && id_novo != "calendar12"){
		document.getElementById(id_antigo).style.display = "none";
		document.getElementById(id_novo).style.display = "block";
	}
}