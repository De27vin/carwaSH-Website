document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', function() {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  });
});

function setStep(step) {
  let progress = step * 20;
  document.getElementById('progressBar').value = progress;
  document.getElementById('progressText').innerText = progress + '%';
  // Update description, duration, cost based on step
}

function prevStep() {
  let progress = Math.max(0, document.getElementById('progressBar').value - 20);
  document.getElementById('progressBar').value = progress;
  document.getElementById('progressText').innerText = progress + '%';
}

function nextStep() {
  let progress = Math.min(100, document.getElementById('progressBar').value + 20);
  document.getElementById('progressBar').value = progress;
  document.getElementById('progressText').innerText = progress + '%';
}
