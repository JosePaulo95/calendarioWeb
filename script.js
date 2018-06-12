
const dias_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var dias_marcados_vagas = [];
var dias_marcados = [];
var qtde_ocpd_ = [];
var qtde_max_ = [];
var valor_unt = 50;

function selecionarDiaIndisponivel(id){
	document.getElementById("nota_caixinha").style.display = "inline-block";
	var x = document.getElementsByClassName("nota_msg");
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	}
	document.getElementById("nota_"+id).style.display = "inline-block";
}
function marcarDia(id, qtde_ocpd, qtde_max){
	document.getElementById("nota_caixinha").style.display = "none";
	if(!dias_marcados.includes(id)){//marca dia
		document.getElementById(id).style.backgroundColor = "#008000";
		document.getElementById(id).style.color = "#F7F7F7";	

		dias_marcados.push(id);
		dias_marcados_vagas.push(1);
		qtde_ocpd_.push(qtde_ocpd);
		qtde_max_.push(qtde_max);

		var array_id = dias_marcados_vagas.length-1;

		var ul = document.getElementById("dynamic-list");
	    var li = document.createElement("li");

		li.setAttribute('id',"nota"+id);
	    
	    var daString="<div>\
					<p class=\"detalheDia\">\
						"+dias_marcados.length+". \
					</p>\
					<div style=\"display: inline-block;\">\
						<div style=\"border-style:solid;border-width: 2px;height:25px;width:auto;border-color: #008000;\"><p style=\"color:#008000;margin-top: -1;text-align:center;\">\
								"+porcentagemOcpd(qtde_ocpd, qtde_max)+"% já reservado\
							</p>\
						</div>\
						<div style=\"display: inline-block;background-color: #008000; height: 30px;width:200px;margin-top: -58;\"> \
							<select id=\"marcado_"+array_id+"\" onchange=maisVagas(\"marcado_"+array_id+"\",\""+array_id+"\") style=\"display: inline-block;margin: 5\">\
							  "+dropdown(qtde_max-qtde_ocpd, 1)+"\
							</select>\
							<p id=\"preco_ind_marcado_"+array_id+"\" style=\"display: inline-block;margin-top: -12;color:white;\">\
								= R$ "+valor_unt+",00\
							</p>\
						</div>\
					</div>\
					<p class=\"detalheDia\">\
						"+diaPorExtenso(id)+"\
					</p>\
					<button onmousedown=\"marcarDia(\'"+id+"\',\'"+qtde_ocpd+"\',\'"+qtde_max+"\');\" type=\"button\" style=\"background-color: rgb(200,30,30); color: #FAFAFA; width:23;height:23;margin:15;float:right;display: inline-block; border-radius: 15px\">X</button>	\
				</div>";

	    var iDiv = document.createElement('div');
	    iDiv.innerHTML += daString;

	    li.appendChild(iDiv);
	    ul.prepend(li);

	    document.getElementById("total").innerHTML = "Total: R$ "+(precoTotal())+",00";
	}else{//desmarca dia
		document.getElementById(id).style.backgroundColor = "#F7F7F7";	
		document.getElementById(id).style.color = "#000";	

		var ul = document.getElementById("dynamic-list");
		var li;
		for (var i = 0; i < dias_marcados.length; i++) {
			li = document.getElementById("nota"+dias_marcados[i]);
			ul.removeChild (li);
		}

		let index = dias_marcados.indexOf(id);
		dias_marcados.splice(index, 1);
		dias_marcados_vagas.splice(index, 1);
		//var li = document.getElementById("nota"+id);
	    //ul.remove();// 

	    add();
	    document.getElementById("total").innerHTML = "Total: R$ "+(precoTotal())+",00";
	}
}
function add(){
	var ul = document.getElementById("dynamic-list");
	for (var i = 0; i < dias_marcados.length; i++) {
		var id = dias_marcados[i];
		var qtde_ocpd = qtde_ocpd_[i];
		var qtde_max = qtde_max_[i];
		var array_id = i;


	    var li = document.createElement("li");
		li.setAttribute('id',"nota"+id);
	    
	    var daString="<div>\
					<p class=\"detalheDia\">\
						"+(i+1)+". \
					</p>\
					<div style=\"display: inline-block;\">\
						<div style=\"border-style:solid;border-width: 2px;height:25px;width:auto;border-color: #008000;\"><p style=\"color:#008000;margin-top: -1;text-align:center;\">\
								"+porcentagemOcpd(qtde_ocpd, qtde_max)+"% já reservado\
							</p>\
						</div>\
						<div style=\"display: inline-block;background-color: #008000; height: 30px;width:200px;margin-top: -58;\"> \
							<select id=\"marcado_"+array_id+"\" onchange=maisVagas(\"marcado_"+array_id+"\",\""+array_id+"\") style=\"display: inline-block;margin: 5\">\
							  "+dropdown(qtde_max-qtde_ocpd, dias_marcados_vagas[i])+"\
							</select>\
							<p id=\"preco_ind_marcado_"+array_id+"\" style=\"display: inline-block;margin-top: -12;color:white;\">\
								= R$ "+valor_unt+",00\
							</p>\
						</div>\
					</div>\
					<p class=\"detalheDia\">\
						"+diaPorExtenso(id)+"\
					</p>\
					<button onmousedown=\"marcarDia(\'"+id+"\',\'"+qtde_ocpd+"\',\'"+qtde_max+"\');\" type=\"button\" style=\"background-color: rgb(200,30,30); color: #FAFAFA; width:23;height:23;margin:15;float:right;display: inline-block; border-radius: 15px\">X</button>	\
				</div>";

	    var iDiv = document.createElement('div');
	    iDiv.innerHTML += daString;

	    li.appendChild(iDiv);
	    ul.prepend(li);		    	
	}
}
function somaVagas(){
	var c = 0;
	for (var i = 0; i < dias_marcados_vagas.length; i++) {
		c += Number(dias_marcados_vagas[i]);
	}
	return c;
}
function precoTotal(){
	return (valor_unt*somaVagas());
}
function porcentagemOcpd(qtde_ocpd, qtde_max){
	var a = ((qtde_ocpd/qtde_max)*100);
	return a.toFixed(0);
}
function dropdown(qtde_disp, id_selected){
	if(id_selected == 1){
		str = "<option selected value=\"1\">1 vaga</option>";
	}else{
		str = "<option value=\"1\">1 vaga</option>";
	}
	qtde_disp--;
	for (var i = 0; i < qtde_disp; i++) {
		if(id_selected == i+2){
			str += "<option selected value=\""+(i+2)+"\">"+(i+2)+" vagas</option>";
		}else{
			str += "<option value=\""+(i+2)+"\">"+(i+2)+" vagas</option>";
		}
	}
	return str;
}
function maisVagas(dropdown_id, array_id){
	var id = Number(array_id);
	dias_marcados_vagas[id] = document.getElementById(dropdown_id).value;
	document.getElementById("preco_ind_"+dropdown_id).innerHTML = "R$ "+(dias_marcados_vagas[id]*valor_unt)+",00";
	document.getElementById("total").innerHTML = "Total: R$ "+(precoTotal())+",00";
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