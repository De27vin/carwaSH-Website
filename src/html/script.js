function selectOption(option) {
    console.log("Option selected:", option);
    // Update progress bar dynamically
    let progressBar = document.getElementById('progressBar');
    progressBar.value = parseInt(progressBar.value) + 15; // Just as an example
    document.getElementById('progressText').innerText = progressBar.value + '%';
}


