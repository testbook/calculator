const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');

const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "margin-of-error-calculator":
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
    } else if (!inputNumberSecond.checkValidity()) {
        inputNumberSecond.parentElement.classList.add('has-error');
    } else if (!inputNumberThird.checkValidity()) {
        inputNumberThird.parentElement.classList.add('has-error');
    } else {

        let n = inputNumberFirst.value;
        let p = inputNumberSecond.value;
        let N = inputNumberThird.value;

        let marginError = marginOfError(n, p, N);
        resultBox.value = marginError;
    }
}


function marginOfError(sampleSize, probability, populationSize) {
    var probabilityy;
    if (probability == 0) {
        probabilityy = 1;
    } else if (probability > 1 || probability < 0) {
        alert("Please check the values of (n), (p) and (N). Enter a value between 0 and 1 for p, or if p is unknown, use p = 0.5");
    }
    else {
        probabilityy = probability;
    }
    const stdError = Math.sqrt(probabilityy * (1 - probabilityy) / sampleSize) * Math.sqrt(Math.abs((populationSize - sampleSize) / (populationSize - 1)));
    const zScore = 1.96;

    const marginOfError = (100 * zScore * stdError) / (probabilityy * 2);


    console.log(stdError)
    console.log(zScore)
    console.log(marginOfError)
    console.log(probabilityy)
    console.log(sampleSize)
    console.log(populationSize)


    return marginOfError.toFixed(3);
}


function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
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
    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberSecond.value = "";
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberThird.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}