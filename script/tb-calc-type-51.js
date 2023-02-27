const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');
const inputNumberFifth = document.getElementById('inputNumberFifth');
const inputNumberSixth = document.getElementById('inputNumberSixth');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const resultBoxThird = document.getElementById('resultBoxThird');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "cross-product-calculator":
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
        let vectorU = [Number(inputNumberFirst.value), Number(inputNumberSecond.value), Number(inputNumberThird.value)];
        let vectorV = [Number(inputNumberFourth.value), Number(inputNumberFifth.value), Number(inputNumberSixth.value)];
        
        resultBoxFirst.value = crossProduct(vectorU, vectorV).i;
        resultBoxSecond.value = crossProduct(vectorU, vectorV).j;
        resultBoxThird.value = crossProduct(vectorU, vectorV).k;
    }

}

function crossProduct(a, b) {
    if (a.length !== 3 || b.length !== 3) {
        errorAlertSelector.innerHTML = "Invalid vector size. Cross product is defined only for vectors of size 3.";
        resultBoxFirst.value = "";
        resultBoxSecond.value = "";
        resultBoxThird.value = "";
    }
  
    const x = a[1] * b[2] - a[2] * b[1];
    const y = a[2] * b[0] - a[0] * b[2];
    const z = a[0] * b[1] - a[1] * b[0];
  
    return {
        "i": x,
        "j": y,
        "k": z
    };
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
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
    resultBoxThird.value = "";
}