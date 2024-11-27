const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector("#qr-code-img"),
  centerImg = wrapper.querySelector("#center-img"),
  imageUpload = wrapper.querySelector("#image-upload");

let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

// Gestion du téléchargement de l'image
imageUpload.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      centerImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});

// Génération des flocons de neige
document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.querySelector('.falling-snow');
  const numberOfSnowflakes = 400;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const leftPosition = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;

    snowflake.style.left = `${leftPosition}vw`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.animationDuration = `${duration}s`;

    snowContainer.appendChild(snowflake);
  }
});
