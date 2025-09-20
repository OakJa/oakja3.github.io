// ========== Audio Upload ==========
const uploadInput = document.getElementById("upload-audio");
const audioName = document.getElementById("audio-name");
const waveformDiv = document.querySelector(".waveform");
const simulateBtn = document.getElementById("simulate-caption");
const captionStatus = document.getElementById("caption-status");
const transcriptBox = document.getElementById("transcript");

// เมื่อเลือกไฟล์ audio
uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    audioName.textContent = `Selected: ${file.name}`;
    drawFakeWaveform();
  } else {
    audioName.textContent = "No file selected";
    waveformDiv.innerHTML = "Audio waveform (example)";
  }
});

// วาด waveform จำลอง
function drawFakeWaveform() {
  waveformDiv.innerHTML = "";
  const canvas = document.createElement("canvas");
  canvas.width = waveformDiv.clientWidth || 300;
  canvas.height = 80;
  waveformDiv.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#1e90ff";
  for (let i = 0; i < canvas.width; i += 4) {
    const h = Math.random() * canvas.height;
    ctx.fillRect(i, (canvas.height - h) / 2, 2, h);
  }
}

// ========== Simulate Caption ==========
simulateBtn.addEventListener("click", () => {
  captionStatus.textContent = "Processing audio...";
  captionStatus.style.color = "#ff9900";

  setTimeout(() => {
    captionStatus.textContent = "Transcript generated ✅";
    captionStatus.style.color = "green";

    transcriptBox.textContent =
      "Transcript (demo): Hello everyone, thank you for joining us today. " +
      "This demo shows how captions can help users with hearing difficulties follow conversations clearly.";
  }, 2000);
});

// ========== Contact Form ==========
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactStatus.textContent = "Sending...";
  contactStatus.style.color = "#ff9900";

  setTimeout(() => {
    contactStatus.textContent = "Request sent successfully ✅";
    contactStatus.style.color = "green";
    contactForm.reset();
  }, 1500);
});
