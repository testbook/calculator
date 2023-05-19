const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const resultBoxThird = document.getElementById('resultBoxThird');
const resultBoxFourth = document.getElementById('resultBoxFourth');
const resultBoxFifth = document.getElementById('resultBoxFifth');
const resultBoxSixth = document.getElementById('resultBoxSixth');
const resultBoxSeventh = document.getElementById('resultBoxSeventh');
const resultBoxEight = document.getElementById('resultBoxEight');
const resultBoxNine = document.getElementById('resultBoxNine');
const resultBoxTen = document.getElementById('resultBoxTen');
const resultBoxEleven = document.getElementById('resultBoxEleven');
const resultBoxTwelve = document.getElementById('resultBoxTwelve');
const errorAlert = document.getElementById('errorAlert');
const isOctal = ''

window.onload = function () {
    switch (calcType) {
        case "hex-calculator":
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
    }else {
        let num1 = inputNumberFirst.value;
        let num2 = inputNumberSecond.value;

        let num1Decimal = parseInt(num1, 16);
        let num2Decimal = parseInt(num2, 16);

        let num1Binary = parseInt(num1, 16).toString(2);
        let num2Binary = parseInt(num2, 16).toString(2);
        
        let decimalAddition = num1Decimal + num2Decimal;
        let decimalSubtract = num1Decimal - num2Decimal;
        let decimalMultiplication = num1Decimal * num2Decimal;
        let decimalDivision = num1Decimal / num2Decimal;
        
        let binaryAddition = decimalAddition.toString(2);
        let binarySubtract = decimalSubtract.toString(2);
        let binaryMultiplication = decimalMultiplication.toString(2);
        let binaryDivision = decimalDivision.toString(2);


        resultBoxFirst.value = num1Decimal;
        resultBoxSecond.value = num2Decimal;

        resultBoxThird.value = binaryAddition;
        resultBoxFourth.value = binarySubtract
        resultBoxFifth.value = binaryMultiplication;
        resultBoxSixth.value = binaryDivision;

        resultBoxSeventh.value = decimalAddition;
        resultBoxEight.value = decimalSubtract;
        resultBoxNine.value = decimalMultiplication;
        resultBoxTen.value = decimalDivision;

        resultBoxEleven.value = num1Binary;
        resultBoxTwelve.value = num2Binary;


    }

}
  

function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
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
    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberSecond.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
    resultBoxThird.value = "";
    resultBoxFourth.value = "";
    resultBoxFifth.value = "";
    resultBoxSixth.value = "";
    resultBoxSeventh.value = "";
    resultBoxEight.value = "";
    resultBoxNine.value = "";
    resultBoxTen.value = "";
}