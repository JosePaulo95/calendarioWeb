<html>
<head>   
<link href="calendar.css" type="text/css" rel="stylesheet" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>

</head>
<body>
<?php
include 'calendar.php';
 
$calendar = new Calendar();
 
echo $calendar->show();
?>
</body>

<a href="#" class="counter">Interesante</a>

</html> 