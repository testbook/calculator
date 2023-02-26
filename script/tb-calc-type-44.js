const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumber = document.getElementById('inputNumber');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "average-deviation-calculator":
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
    if (!inputNumber.checkValidity() || !pattern.test(inputNumber.value)) {
        inputNumber.parentElement.classList.add('has-error');
    }else {
        let xi = inputNumber.value.split(',').map(toNumber);
        let meanx = mean(xi);
        let avgDev = averageDeviation(xi, meanx);

        resultBoxFirst.value = meanx;
        resultBoxSecond.value = avgDev;
    }

}

function toNumber(value) {
    return Number(value);
}

function mean(values) {
    let sum = 0;
    let n = values.length;
    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum/n;
}

function averageDeviation(values, mean) {
    let res = 0;
    let n = values.length;
    for(let i = 0; i < values.length; i++) {
        res += Math.abs(values[i] - mean);
    }
    return res / (n);
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
}