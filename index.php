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
<div style="margin:0px auto;width: 602px;height: 100;">
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
		<div style="margin-bottom: -27">
			<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: Blue; width: 13;height: 13;display: inline-block;"></div>
			<p style="display: inline-block;">- esgotado</p>
		</div>
	</div>
	<div id="nota_caixinha" style="display:none; background-color: #D76B6B; border-radius: 10px; width: 300;height: 100;float: right;margin:10;">
		<p id="nota_2018-06-10" class="nota_msg" style="display: none;color: white; margin: 10;">Não estou disponível aos domingos, desculpe companheiro.</p>
		<p id="nota_2018-07-04" class="nota_msg" style="display: none;color: white; margin: 10;">Reparo do barco</p>
	</div>
	<div style="background-color: #FAFAFA;">
		<h1 style=" margin-left:20; font-weight: 900; color: #008000">
			Total: R$ 0,00
		</h1>
		<button type="button" style="display: inline-block;">Avançar</button>

		<ul id="dynamic-list">
		
		</ul>
	</div>
</div>
<script type="text/javascript" src="script.js"></script>
</html> 