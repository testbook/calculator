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
        case "gravitational-force-calculator":
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

        let mass1 = inputNumberFirst.value;
        let mass2 = inputNumberSecond.value;
        let distance = inputNumberThird.value;
        let gravitation = inputNumberFourth.value;
        const G = 6.6743 * 1e-11;
        let res = 0;

        if (mass1.toLowerCase() === 'x') {
            res = (gravitation * distance * distance) / (G * mass2);
            resultBox.value = res;
        } else if (mass2.toLowerCase() === 'x') {
            res = (gravitation * distance * distance) / (G * mass1);
            resultBox.value = res;
        } else if (distance.toLowerCase() === 'x') {
            res = Math.sqrt((G * mass1 * mass2) / gravitation);
            resultBox.value = res;
        } else if (gravitation.toLowerCase() === 'x') {
            res = (G * mass1 * mass2) / Math.pow(distance, 2);
            resultBox.value = res;
        }
        else {
            alert('pls enter 2 input value and third x');
        }
    }
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