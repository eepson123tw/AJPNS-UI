<script setup>
function fileUpload(e) {
  readURL(e.target.files[0]);
}
function readURL(data) {
  if (data) {
    const imageDom = document.querySelector("#imagePreview");
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = (e) => {
      imageDom.style.backgroundImage = `url(${e.target.result})`;
      console.log(e.target.result);
    };
  }
}
</script>

<template>
  <h2>
    Image Upload
    <small>with preview</small>
  </h2>
  <div class="container">
    <div class="jpg-upload">
      <div class="jpg-file-upload">
        <input
          type="file"
          id="imageUpload"
          accept=".png, .jpg, .jpeg"
          @change="fileUpload"
        />
        <label for="imageUpload"></label>
      </div>
      <div class="jpg-preview">
        <div
          id="imagePreview"
          style="background-image: url(https://fakeimg.pl/250/)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 200px;
  height: 50px;
}

.container {
  max-width: 960px;
  margin: 30px auto;
  padding: 20px;
  background: linear-gradient(to bottom, #000 70%, #ccc);
  border-radius: 10px;
}

h2 {
  font-size: 20px;
  text-align: center;
  margin: 20px 0 20px;
  color: #000;
}
small {
  display: block;
  font-size: 15px;
  padding-top: 8px;
  color: #757575;
}

.jpg-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
  height: 50vh;
}
.jpg-file-upload {
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 0px;
}
.jpg-preview {
  width: 250px;
  height: 250px;
  position: absolute;
  border-radius: 100%;
  border: 2px dotted #f8f8f8;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.jpg-preview div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
