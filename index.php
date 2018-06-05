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

<ul id="dynamic-list">
	
</ul>

<div id="myid">Hello There !!</div>

<a href="#" onclick="changeValue('myid'); return false;">Change Color</a>

<script type="text/javascript" src="script.js"></script>>
</html> 