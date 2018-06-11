<html>
<head>   
	<link href="calendar.css" type="text/css" rel="stylesheet" />
</head>
<body>
<?php
include 'calendar.php';
 
$calendar = new Calendar();
 
echo $calendar->show();
?>
</body>
<div style="margin:0px auto;width: 550px;height: 100;">
	<div>
		<div style="margin-left: 10; display: inline-block;">
			<div style="margin-bottom: -27">
				<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: #F7F7F7; width: 13;height: 13;display: inline-block;"></div>
				<p style="display: inline-block;">- disponível</p>
			</div>
			<div style="margin-bottom: -27">
				<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: Green; width: 13;height: 13;display: inline-block;"></div>
				<p style="display: inline-block;">- no carrinho</p>
			</div>
			<div style="margin-bottom: -27">
				<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: #D76B6B; width: 13;height: 13;display: inline-block;"></div>
				<p style="display: inline-block;">- indisponível</p>
			</div>
			<div>
				<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: Blue; width: 13;height: 13;display: inline-block;"></div>
				<p style="display: inline-block;">- esgotado</p>
			</div>
		</div>
		<div id="nota_caixinha" style="display:none; background-color: #D76B6B; border-radius: 10px; width: 300;height: 100;float: right;margin:10;">
			<p id="nota_2018-06-10" class="nota_msg" style="display: none;color: white; margin: 10;">Não estou disponível aos domingos, desculpe companheiro.</p>
			<p id="nota_2018-07-04" class="nota_msg" style="display: none;color: white; margin: 10;">Reparo do barco</p>
		</div>
	</div>
	<div style="background-color: #FAFAFA;">
		<div>
			<h1 id="total" style="display: inline-block;margin-left:20; font-weight: 900; color: #008000">
				Total: R$ 0,00
			</h1>
			<button type="button" style="background-color: #008000; color: #FAFAFA; width:100;height:40;margin:15;float:right;display: inline-block; ">Avançar</button>
		</div>
		<ul id="dynamic-list">
			<li>
				<div>
					<p class="detalheDia">
						1. 
					</p>
					<div style="display: inline-block;">
						<div  style="border-style:solid;border-width: 2px;height:25px;width:120;border-color: #008000;"> 
							<p style="color:#008000;margin-top: -1;">
								63% já reservado
							</p>
						</div>
						<div style=" background-color: #008000; height: 30px;width:170px;margin-top: -58;"> 
							<select id="marcado_1" onchange="compraVagas(this)" style="margin: 5">
							  <option value="1">1 vaga</option>
							  <option value="2">2 vagas</option>
							  <option value="3">3 vagas</option>
							  <option value="4">4 vagas</option>
							</select>
							<p style="display: inline-block;margin-top: -12;color:white;">
								= R$ 120,00
							</p>
						</div>
					</div>
					<p class="detalheDia">
						Quarta, 16 de Janeiro de 2018
					</p>
					<button type="button" style="background-color: rgb(200,30,30); color: #FAFAFA; width:23;height:23;margin:15;float:right;display: inline-block; border-radius: 15px">X</button>	
				</div>
			</li>
		</ul>
	</div>
</div>
<script type="text/javascript" src="script.js"></script>
</html> 