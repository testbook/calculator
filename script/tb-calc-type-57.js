const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');

const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "rational-or-irrational-calculator":
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
    } else {
        a = inputNumberFirst.value;
        x = inputNumberSecond.value;

        res = Math.pow(a, 1 / x);

        resultBoxFirst.value = res;
        if (Number.isInteger(res)) {
            resultBoxSecond.value = "YES";
        } else {
            resultBoxSecond.value = "NO";
        }
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
}