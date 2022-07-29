const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';

const inputSelector = document.getElementById('inputValNumber');
const inputSelector2 = document.getElementById('inputValNumber2');
const resultSelector = document.getElementById('resultValNumber');
const errorAlertSelector = document.getElementById('errorAlert');



window.onload = function() {

    switch (calcType) {

        case "value-of-x":
            break;
        default:
            calcEmptyBody.innerHTML = `<div class="card__empty"><h3>Wrong URl</h3></div>`
    }
};


function calculateFun() {
    if (!inputSelector.checkValidity() || inputSelector.validity.patternMismatch) {
        inputSelector.parentElement.classList.add('has-error');
    } else if (!inputSelector2.checkValidity() || inputSelector2.validity.patternMismatch) {
        inputSelector2.parentElement.classList.add('has-error');
        resultSelector.value = "";
    } else {
        resultSelector.value = inputSelector2.value / inputSelector.value;
    }

}

function onkeyPressFun() {
    inputSelector.parentElement.classList.remove('has-error');
    inputSelector2.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {

        if (inputSelector.value.length == 0 || inputSelector2.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputSelector.parentElement.classList.add('has-error');
            inputSelector2.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputSelector.parentElement.classList.remove('has-error');
    inputSelector2.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    inputSelector.value = "";
    inputSelector2.value = "";
    resultSelector.value = "";
}