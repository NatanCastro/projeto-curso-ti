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
    echo "<div style='display: flex; flex-wrap: wrap'>";
    while ($row = $result->fetch_assoc()) {
      $urlArray = explode('/', $row["url"]);
      $name = end($urlArray);
      echo "<div class='image-container'>";
      echo "<img class='image' src='" . $row["url"] . "' alt='Imagem " . $row["id"] . "'>";
      echo "<button class='delete-button' data-id='"  . $row["id"] . "' onclick='excluirItem()'>X</button>";
      echo "<a target='_blank' href='". $row["url"] ."' download='". $name ."' class='download-button'>";
      echo "<img class='download-img' src='./image/download.png'/>";
      echo "</a>";
      echo "</div>";
    }
    echo "</div>";
  } else {
    echo "Nenhuma imagem encontrada.";
  }

  $conn->close();
  ?>

<script>
  document.querySelectorAll('.delete-button').forEach((ele) => {
    ele.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id)
      const id = e.target.dataset.id
      const res = await fetch(`http://www.trabalho.local:3000/images/${id}`, {
        method: "DELETE"
      })
      await res.json()

      location.reload()
      window.location.href = "pagina_de_exclusao.php";
    })
  })
</script>


</body>

</html>
