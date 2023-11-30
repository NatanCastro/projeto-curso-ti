document.querySelectorAll('.delete-button').forEach((ele) => {
  ele.addEventListener('click', async (e) => {
      const id = e.currentTarget.dataset.id
      try {
          const res = await fetch(`http://www.trabalho.local:3000/images/${id}`, {
              method: "DELETE"
          });

          if (!res.ok) {
              console.error('Falha ao excluir a imagem.');
          }
      } catch (error) {
          console.error('Erro durante a exclusão:', error);
      }

      //Aguarda 500 milissegundos (0.5 segundos) antes de recarregar a página
      setTimeout(() => {
          location.href = "galeria.php";
      }, 500);
  });
});




/**
 * @param {Event} e 
 */
async function downloadImage(e) {
  try {
      e = e || window.event;

      if (e.preventDefault) {
          e.preventDefault();
      }

      const button = e.currentTarget || e.srcElement;

      if (!button) {
          throw new Error('Botão não está definido.');
      }

      const url = button.getAttribute('data-url');

      if (!url) {
          throw new Error('A URL não está definida.');
      }

      const name = url.split('/').at(-1);

      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = name;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(blobUrl);
  } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
  }
}

document.querySelectorAll('.download')