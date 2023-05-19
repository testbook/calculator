const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');
const inputNumberFifth = document.getElementById('inputNumberFifth');
const inputNumberSixth = document.getElementById('inputNumberSixth');

const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "combined-gas-law-calculator":
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
    }else if (!inputNumberFifth.checkValidity()) {
        inputNumberFifth.parentElement.classList.add('has-error');
    }else if (!inputNumberSixth.checkValidity()) {
        inputNumberSixth.parentElement.classList.add('has-error');
    }else {

        let p1 = inputNumberFirst.value;
        let v1 = inputNumberSecond.value;
        let t1 = inputNumberThird.value;
        let p2 = inputNumberFourth.value;
        let v2 = inputNumberFifth.value;
        let t2 = inputNumberSixth.value;

        let res = 0;

        if (p1.toLowerCase() === 'x') {
            res = (p2 * v2 * t1) / (t2 * v1);
            resultBox.value = res;
        } else if (v1.toLowerCase() === 'x') {
            res = (p2 * v2 * t1) / (t1 * p1);
            resultBox.value = res;
        } else if (t1.toLowerCase() === 'x') {
            res = (p1 * v1 * t2)/(p2 * v2);
            resultBox.value = res;
        } else if (p2.toLowerCase() === 'x') {
            res = (p1 * v1 * t2)/(t1 * v2);
            resultBox.value = res;
        } else if (v2.toLowerCase() === 'x') {
            res = (p1 * v1 * t2)/(t1 * p2);
            resultBox.value = res;
        } else if (t2.toLowerCase() === 'x') {
            res = (p2 * v2 * t1)/(p1 * v1);
            resultBox.value = res;
        }
        else {
            alert('Please input any 3 values and x for unknown value');
        }
    }
}



function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFifth.parentElement.classList.remove('has-error');
    inputNumberSixth.parentElement.classList.remove('has-error');
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
        if (inputNumberFifth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFifth.parentElement.classList.add('has-error');
        }
        if (inputNumberSixth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSixth.parentElement.classList.add('has-error');
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
    inputNumberFifth.parentElement.classList.remove('has-error');
    inputNumberFifth.value = "";
    inputNumberSixth.parentElement.classList.remove('has-error');
    inputNumberSixth.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}