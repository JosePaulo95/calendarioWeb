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
			<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: #DDD; width: 13;height: 13;display: inline-block;"></div>
			<p style="display: inline-block;">- disponível</p>
		</div>
		<div style="margin-bottom: -27">
			<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: Green; width: 13;height: 13;display: inline-block;"></div>
			<p style="display: inline-block;">- no carrinho</p>
		</div>
		<div style="margin-bottom: -27">
			<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: #E19090; width: 13;height: 13;display: inline-block;"></div>
			<p style="display: inline-block;">- indisponível</p>
		</div>
		<div style="margin-bottom: -27">
			<div style="border-style:solid; margin-bottom: -3; border-width:thin; background-color: Blue; width: 13;height: 13;display: inline-block;"></div>
			<p style="display: inline-block;">- esgotado</p>
		</div>
	</div>
	<div id="nota_caixinha" style="display:none; background-color: #E19090; border-radius: 10px; width: 300;height: 100;float: right;margin:10;">
		<p id="nota_2018-06-10" class="nota_msg" style="display: none;color: black; margin: 10;">Não estou disponível aos domingos, desculpe companheiro.</p>
		<p id="nota_2018-07-04" class="nota_msg" style="display: none;color: black; margin: 10;">Reparo do barco</p>
	</div>

	<ul id="dynamic-list">
	
	</ul>
</div>
<script type="text/javascript" src="script.js"></script>
</html> 