<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Envio de imagem</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <header>
  <a href="/galeria.php"><button class="button">Galeria</button></a>
  </header>
  <h1>Envie uma Imagem</h1>

  <form id="imageForm">
    <label for="imageInput" class="custom-file-upload">
      Escolha uma imagem
      <input type="file" id="imageInput" name="image" accept="image/*" required>
    </label>
    <input type="submit" value="Enviar Imagem" class="submit-button">
  </form>

  <div class="preview-container">
    <div class="preview">
      <img id="imagePreview" src="#" alt="Prévia da imagem" style="display: none;">
    </div>
  </div>

  <script src="js/index.js"></script>
</body>
</html>