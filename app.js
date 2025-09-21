// Left Ear Volume
const leftEar = document.getElementById("left-ear");
const leftEarValue = document.getElementById("left-ear-value");
const previewLeft = document.getElementById("preview-left");

leftEar.addEventListener("input", () => {
  leftEarValue.textContent = leftEar.value;
  previewLeft.textContent = leftEar.value + "%";
});

// Right Ear Volume
const rightEar = document.getElementById("right-ear");
const rightEarValue = document.getElementById("right-ear-value");
const previewRight = document.getElementById("preview-right");

rightEar.addEventListener("input", () => {
  rightEarValue.textContent = rightEar.value;
  previewRight.textContent = rightEar.value + "%";
});

// Frequency Adjustment
const freq = document.getElementById("frequency");
const freqValue = document.getElementById("frequency-value");
const previewFreq = document.getElementById("preview-frequency");

freq.addEventListener("input", () => {
  freqValue.textContent = freq.value;
  previewFreq.textContent = freq.value + " Hz";
});

// Contact form (คงไว้เหมือนเดิม)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contact-status").textContent =
    "Your request has been sent. Thank you!";
});
