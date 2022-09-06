const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const resultBox = document.getElementById('resultBox');
const resultSignBox = document.getElementById('resultSignBox');
const errorAlert = document.getElementById('errorAlert');



window.onload = function() {

    switch (calcType) {
        case "check-greater-less":
            break;
        default:
            calcEmptyBody.innerHTML = `<div class="card__empty"><h3>Wrong URl</h3></div>`
    }
};


function calculateFun() {
    if (!firstNumber.checkValidity() || firstNumber.validity.patternMismatch) {
        firstNumber.parentElement.classList.add('has-error');
    } else if (!secondNumber.checkValidity() || secondNumber.validity.patternMismatch) {
        secondNumber.parentElement.classList.add('has-error');
    } else {
        let firstValue = firstNumber.value;
        let secondValue = secondNumber.value;
        if(firstValue < 0 && secondValue < 0){
            if (firstValue > secondValue) {
            resultSignBox.value = '<';
            resultBox.value = "LESS";
        } else if (firstValue < secondValue) {
            resultSignBox.value = '>';
            resultBox.value = "GREATER";
        } else if (firstValue == secondValue) {
            resultSignBox.value = '=';
            resultBox.value = "EQUAL";

        }
        }else{
           if (firstValue > secondValue) {
                resultSignBox.value = '>';
                resultBox.value = "GREATER";
            } else if (firstValue < secondValue) {
                resultSignBox.value = '<';
                resultBox.value = "LESS";
            } else if (firstValue == secondValue) {
                resultSignBox.value = '=';
                resultBox.value = "EQUAL";

            } 
        }
        
    }

}

function onkeyPressFun() {
    firstNumber.parentElement.classList.remove('has-error');
    secondNumber.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {

        if (firstNumber.value.length == 0 || secondNumber.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            firstNumber.parentElement.classList.add('has-error');
        }
        if (firstNumber.value.length !== 0 && secondNumber.value.length == 0) {
            firstNumber.parentElement.classList.remove('has-error');
            secondNumber.parentElement.classList.add('has-error');
        }


    }
}

function resetFun() {
    firstNumber.parentElement.classList.remove('has-error');
    secondNumber.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    firstNumber.value = "";
    secondNumber.value = "";
    resultSignBox.value = "";
    resultBox.value = "";
}