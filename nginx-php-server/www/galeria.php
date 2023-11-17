<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Galeria de Imagens</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

  <h1>Galeria de Imagens</h1>

  <?php
  // Conexão com o banco de dados
  $servername = "192.168.0.5";
  $username = "root";
  $password = "root";
  $dbname = "images";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Verificar a conexão
  if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
  }

  // Consulta para obter as URLs das imagens
  $sql = "SELECT id, url FROM imagens";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // Exibir as imagens
    while ($row = $result->fetch_assoc()) {
      echo "<img src='" . $row["url"] . "' alt='Imagem " . $row["id"] . "'>";
    }
  } else {
    echo "Nenhuma imagem encontrada.";
  }

  $conn->close();
  ?>

</body>

</html>
