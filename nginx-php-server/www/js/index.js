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
  const formData = new FormData()
  formData.append('image', imageInput.files[0])
  fetch('http://192.168.0.5:3000/upload', {
    method: 'POST',
    body: formData,
  }).then((res) => {
    if (res.status !== 201) {
      throw new Error('não foi possivel fazer o upload da imagem tente novamente')
    }
    Response.redirect('http://192.168.0.5/galeria.php')
  }).catch((e) => {
    alert(e.message)
  })
})
