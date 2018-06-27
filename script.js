
const dias_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var dias_marcados = [];

var mouseDown = false;
document.body.onmousedown = function() { 
	mouseDown = true;
}
document.body.onmouseup = function() {
	mouseDown = false;
}

function marcarDiaSemana(index_dia_semana, index_mes, ano){
	var aux_str = "20"+ano+"-"+index_mes+"-01";
	var aux_date;

	aux_date = new Date(aux_str);

	while(aux_date.getDay() != index_dia_semana){
		aux_date.setDate(aux_date.getDate() + 1);
	}

	aux_date.setDate(aux_date.getDate() + 1);

	var d = new Date(aux_date);
	d.setMonth(d.getMonth()+1);
	d.setDate(0);

	for (var i = 0; i <= d.getDate(); i+=7) {
		if(!dias_marcados.includes(formatDate(aux_date, i))){
			indisponibilizar(formatDate(aux_date, i));
		}
	}
}
function formatDate(date, passo) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()+passo),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
function marcarDiaClick(id){
	if(dias_marcados.includes(id)){
		disponibilizar(id);	
	}else{
		indisponibilizar(id);
	}
}
function indisponibilizar(id) {
	document.getElementById(id).style.backgroundColor = "#D76B6B";
	dias_marcados.push(id);
}
function disponibilizar(id) {
	document.getElementById(id).style.backgroundColor = "#F7F7F7";
	let index = dias_marcados.indexOf(id);
	dias_marcados.splice(index, 1);
}
function marcarDia(id){
	if(mouseDown){
		if(dias_marcados.includes(id)){
			document.getElementById(id).style.backgroundColor = "#F7F7F7";
			let index = dias_marcados.indexOf(id);
			dias_marcados.splice(index, 1);
		}else{
			document.getElementById(id).style.backgroundColor = "#D76B6B";
			dias_marcados.push(id);
		}
	}
}
function changeMonth(id_antigo, id_novo){
	if(id_novo != "calendar-1" && id_novo != "calendar12"){
		document.getElementById(id_antigo).style.display = "none";
		document.getElementById(id_novo).style.display = "block";
	}
}