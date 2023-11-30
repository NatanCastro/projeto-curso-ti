<?php
require_once './db/db.php'
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Galeria de Imagens</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/galeria.css">
</head>

<body>
  <header>
    <a href="/"><button class="button">Home</button></a>
  </header>

  <h1>Galeria de Imagens</h1>

  <?php
  $conn = connect();

  $result = getImages($conn);


  if ($result->num_rows > 0) {
    // Exibir as imagens
    echo "<div style='display: flex; flex-wrap: wrap'>";
    while ($row = $result->fetch_assoc()) {
      $urlArray = explode('/', $row["url"]);
      $name = end($urlArray);
      $urlImagem = $row["url"];

      echo "<div class='image-container'>";
      echo "<img class='image' src='" . $row["url"] . "' alt='Imagem " . $row["id"] . "'>";
      echo "<button class='delete-button' onclick='excluirItem()' data-id='"  . $row["id"] . "'><img class='delete-img' src='./image/delete.png'/></button>";
      echo "<button class='download-button' onclick='downloadImage()' data-url='" . $row['url'] . "'><img class='download-img' src='./image/download.png'/></button>";
      echo "<div class='time'>" . $row['created_at'] . "</div>";
      echo "</div>";
    }
  
    echo "</div>";
  } else {
    echo "Nenhuma imagem encontrada.";
  }
  ?>
  <script src="./js/galeria.js"></script>
</body>

</html>
