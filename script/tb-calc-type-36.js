const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');


window.onload = function () {
    switch (calcType) {
        case "percentage-increase-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};

function isNum(num) {
    return !isNaN(parseInt(num)) ? false : true;
}

function calculateFun() {
    if (!inputNumberFirst.checkValidity() || this.isNum(inputNumberFirst.value)) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }
    else if (!inputNumberSecond.checkValidity() || this.isNum(inputNumberSecond.value)) {
        inputNumberSecond.parentElement.classList.add('has-error');
    }
    else if (!inputNumberThird.checkValidity() || this.isNum(inputNumberThird.value)) {
        inputNumberThird.parentElement.classList.add('has-error');
    }
    else {
        var a = inputNumberFirst.value * inputNumberThird.value;
        var b = inputNumberSecond.value * 1;
        var r = math.fraction(a, b)
        console.log(r);
        resultBoxFirst.value = r.n;
        resultBoxSecond.value = r.d;
    }

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
        else if (inputNumberSecond.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
        else if (inputNumberThird.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberSecond.value = ""
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberThird.value = ""
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
}