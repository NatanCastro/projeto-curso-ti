<?php

$url = $_POST['url'];

$servername = "192.168.0.5";
$username = "root";
$password = "root";
$dbname = "images";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
  die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

echo "$url";
