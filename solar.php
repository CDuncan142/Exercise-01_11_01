<?php
$WeatherSource = "https://api.forecast.io/forecast/79d8d7e5313ad21a4518486c6bc0f6f5/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>
