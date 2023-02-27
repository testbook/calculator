const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumber = document.getElementById('inputNumber');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const resultBoxThird = document.getElementById('resultBoxThird');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "standard-deviation-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};

let stringToNum = function (inputVal) {
    let arr = inputVal.split(",");
    return arr.map(item => Number(item));
}

function standardDeviation(values) {
    let arr = stringToNum(values)
    let n = arr.length;
    let mean = arr.reduce((a, b) => a + b) / n;

    let variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    let stdDev = Math.sqrt(variance);

    resultBoxFirst.value = Math.round((mean) * 1000) / 1000;
    resultBoxSecond.value = Math.round((variance) * 1000) / 1000;
    resultBoxThird.value = Math.round((stdDev) * 1000) / 1000;
}

function calculateFun() {
    if (!inputNumber.checkValidity()) {
        inputNumber.parentElement.classList.add('has-error');
    }
    else {
        standardDeviation(inputNumber.value);
    }

}



function onkeyPressFun() {
    inputNumber.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {
        if (inputNumber.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumber.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputNumber.parentElement.classList.remove('has-error');
    inputNumber.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
    resultBoxThird.value = "";
}