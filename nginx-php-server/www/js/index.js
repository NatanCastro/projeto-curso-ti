const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const form = document.getElementById('imageForm')

imageInput.addEventListener('change', function() {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.style.display = 'block';
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = 'none';
    imagePreview.src = '#';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const imageUrl = await fetch('www.trabalho.local:3000/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  console.log(imageUrl)

  await fetch('api/salvar-imagem.php', {
    method: 'POST',
    body: JSON.stringify({ imageUrl })
  })
})
