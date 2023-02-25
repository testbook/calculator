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
const inputNumberSeventh = document.getElementById('inputNumberSeventh');
const inputNumberEight = document.getElementById('inputNumberEight');
const inputNumberNine = document.getElementById('inputNumberNine');

const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "diagonal-matrix-calculator":
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
    if (!inputNumberFirst.checkValidity() || !pattern.test(inputNumberFirst.value)) {
        inputNumberFirst.parentElement.classList.add('has-error');
    } else if (!inputNumberSecond.checkValidity() || !pattern.test(inputNumberSecond.value)) {
        inputNumberSecond.parentElement.classList.add('has-error');
    } else if (!inputNumberThird.checkValidity() || !pattern.test(inputNumberThird.value)) {
        inputNumberThird.parentElement.classList.add('has-error');
    } else if (!inputNumberFourth.checkValidity() || !pattern.test(inputNumberFourth.value)) {
        inputNumberFourth.parentElement.classList.add('has-error');
    } else if (!inputNumberFifth.checkValidity() || !pattern.test(inputNumberFifth.value)) {
        inputNumberFifth.parentElement.classList.add('has-error');
    } else if (!inputNumberSixth.checkValidity() || !pattern.test(inputNumberSixth.value)) {
        inputNumberSixth.parentElement.classList.add('has-error');
    } else if (!inputNumberSeventh.checkValidity() || !pattern.test(inputNumberSeventh.value)) {
        inputNumberSeventh.parentElement.classList.add('has-error');
    } else if (!inputNumberEight.checkValidity() || !pattern.test(inputNumberEight.value)) {
        inputNumberEight.parentElement.classList.add('has-error');
    } else if (!inputNumberNine.checkValidity() || !pattern.test(inputNumberNine.value)) {
        inputNumberNine.parentElement.classList.add('has-error');
    }else {
        let r1c1 = inputNumberFirst.value;
        let r1c2 = inputNumberSecond.value;
        let r1c3 = inputNumberThird.value;

        let r2c1 = inputNumberFourth.value;
        let r2c2 = inputNumberFifth.value;
        let r2c3 = inputNumberSixth.value;

        let r3c1 = inputNumberSeventh.value;
        let r3c2 = inputNumberEight.value;
        let r3c3 = inputNumberNine.value;

        if( (r1c2 == 0 && r1c3 == 0 && r2c1 == 0 && r2c3 == 0 && r3c1 == 0 && r3c2 == 0) && (r1c1 != 0 && r2c2 != 0 && r3c3 != 0)){
            resultBox.value = "Diagonal";
        }else {
            resultBox.value = "Not Diagonal";
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
    inputNumberSeventh.parentElement.classList.remove('has-error');
    inputNumberEight.parentElement.classList.remove('has-error');
    inputNumberNine.parentElement.classList.remove('has-error');
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
        if (inputNumberSeventh.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSeventh.parentElement.classList.add('has-error');
        }
        if (inputNumberEight.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberEight.parentElement.classList.add('has-error');
        }
        if (inputNumberNine.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberNine.parentElement.classList.add('has-error');
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
    inputNumberSeventh.parentElement.classList.remove('has-error');
    inputNumberSeventh.value = "";
    inputNumberEight.parentElement.classList.remove('has-error');
    inputNumberEight.value = "";
    inputNumberNine.parentElement.classList.remove('has-error');
    inputNumberNine.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}