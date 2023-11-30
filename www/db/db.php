<?php

/**
 * @return mysqli Database connection
 **/

function connect()
{
  $servername = "192.168.0.5";
  $username = "root";
  $password = "root";
  $dbname = "images";
  try {
    $conn = new mysqli($servername, $username, $password, $dbname);
  } catch (Exception $e) {
    if ($conn->connect_error) {
      die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }
  }

  return $conn;
}

/**
 * @param mysqli $conn Database connection
 **/
function disconnect(mysqli $conn)
{
  $conn->close();
}

/**
 * @param mysqli $conn Database connection
 * @return mysqli_result
 **/
function getImages(mysqli $conn)
{
  $sql = "SELECT * FROM images
          ORDER BY created_at DESC;";
  return $conn->query($sql);
}
