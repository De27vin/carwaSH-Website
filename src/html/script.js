var selectedOptions = []; // Zum Speichern aller gewählten Optionen und ihrer Preise
var currentStep = 'cleaning'; // Initialer Schritt
var currentPrice = 0; // Initiale Preisfestlegung

var prices = {
    'Innenreinigung': 50,
    'Außenreinigung': 30,
    'Innen und Außenreinigung': 70,
    'Kleinwagen': 10,
    'Kombi': 20,
    'SUV': 30,
    'Bus': 40,
    'Sitzreinigung': 30,
    'Lederpflege': 30
};

function selectOption(option) {
    selectedOptions.push(option); // Fügt die gewählte Option zum Array hinzu
    console.log("Option selected:", option);

    var continueButton = document.getElementById('continueButton');
    continueButton.classList.remove('disabled');
    continueButton.disabled = false;
}

function selectSize(option) {
    selectedOptions.push(option); // Fügt die gewählte Fahrzeuggröße zum Array hinzu
    console.log("Size selected:", option);

    var continueButton = document.getElementById('continueButton');
    continueButton.classList.remove('disabled');
    continueButton.disabled = false;
}

function showNext() {
    if (selectedOptions.length === 0) {
        alert("Bitte wählen Sie eine Option aus.");
        return;
    }

    var lastSelectedOption = selectedOptions[selectedOptions.length - 1];
    if (currentStep !== 'extras') {
        currentPrice += prices[lastSelectedOption];
        document.getElementById('currentPrice').innerText = currentPrice;
    }

    switch (currentStep) {
        case 'cleaning':
            document.getElementById('cleaningOptions').style.display = 'none';
            document.getElementById('sizeOptions').style.display = 'flex';
            currentStep = 'size';
            break;
        case 'size':
            document.getElementById('sizeOptions').style.display = 'none';
            document.getElementById('extrasOptions').style.display = 'flex';
            currentStep = 'extras';
            break;
        case 'extras':
            console.log("Abschluss des Prozesses bei einem Gesamtpreis von: " + currentPrice + "€");
            break;
    }

    selectedOptions = [];
    var continueButton = document.getElementById('continueButton');
    continueButton.classList.add('disabled');
    continueButton.disabled = true;
}

function goBack() {
    if (selectedOptions.length > 0) {
        var lastOption = selectedOptions.pop();
        if (currentStep !== 'cleaning') {
            currentPrice -= prices[lastOption];
            document.getElementById('currentPrice').innerText = currentPrice;
        }
    }

    switch (currentStep) {
        case 'extras':
            document.getElementById('extrasOptions').style.display = 'none';
            document.getElementById('sizeOptions').style.display = 'flex';
            currentStep = 'size';
            break;
        case 'size':
            document.getElementById('sizeOptions').style.display = 'none';
            document.getElementById('cleaningOptions').style.display = 'flex';
            currentStep = 'cleaning';
            break;
        case 'cleaning':
            console.log("Sie sind bereits am Anfang des Prozesses.");
            break;
    }

    var continueButton = document.getElementById('continueButton');
    continueButton.classList.add('disabled');
    continueButton.disabled = true;
}
