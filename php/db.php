<?php
$username = "root";
$password = "";
$dbname = "portfolio";
$dsn = "mysql:host=localhost;dbname=$dbname";

$serverConnect = new PDO($dsn, $username, $password);

?>