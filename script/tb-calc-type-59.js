const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');

const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "least-common-denominator-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};



function calculateFun() {
    if (!inputNumberFirst.checkValidity()) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }else if (!inputNumberSecond.checkValidity()) {
        inputNumberSecond.parentElement.classList.add('has-error');
    }else if (!inputNumberThird.checkValidity()) {
        inputNumberThird.parentElement.classList.add('has-error');
    }else if (!inputNumberFourth.checkValidity()) {
        inputNumberFourth.parentElement.classList.add('has-error');
    }else {

        a = inputNumberFirst.value;
        b = inputNumberSecond.value;
        c = inputNumberThird.value;
        d = inputNumberFourth.value;

        let lcd = leastCommonDenominator([a, b], [c, d]);
        resultBox.value = lcd; 
    }
}

function leastCommonDenominator(a, b) {
    // Find the greatest common divisor using Euclid's algorithm
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    }
  
    // Calculate the LCD using the formula: LCD = (a * b) / gcd(a, b)
    var lcd = (a[1] * b[1]) / gcd(a[1], b[1]);
  
    return lcd;
}  


function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {
        if (inputNumberFirst.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFirst.parentElement.classList.add('has-error');
        }
        if (inputNumberSecond.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
        if (inputNumberThird.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        }
        if (inputNumberFourth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFourth.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberSecond.value = "";
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberThird.value = "";
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFourth.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}