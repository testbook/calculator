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
        case "equivalent-weight-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};


function getMolecularWeight() {
    let ba = Number(inputNumberSecond.value);
    let ew = Number(inputNumberThird.value);
    let ans = ba*ew;
    resultBox.value = Math.round((ans) * 1000) / 1000;
}
function getBasicityAcid() {
    let mw = Number(inputNumberFirst.value);
    let ew = Number(inputNumberThird.value);
    let ans = mw / ew;
    resultBox.value = Math.round((ans) * 1000) / 1000;
}

function getEquivalentWeightAcid() {
    let mw = Number(inputNumberFirst.value);
    let ba = Number(inputNumberSecond.value);
    let ans = mw / ba;
    resultBox.value = Math.round((ans) * 1000) / 1000;
}

function calculateFun() {
    if (!inputNumberFirst.checkValidity()) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }
    else if (!inputNumberSecond.checkValidity()) {
        inputNumberSecond.parentElement.classList.add('has-error');
    }
    else if (!inputNumberThird.checkValidity()) {
        inputNumberThird.parentElement.classList.add('has-error');
    }
    else {
        if (inputNumberFirst.value.toLowerCase() === 'x') {
            getMolecularWeight();
        } else if (inputNumberSecond.value.toLowerCase() === 'x') {
            getBasicityAcid();
        } else if (inputNumberThird.value.toLowerCase() === 'x') {
            getEquivalentWeightAcid();
        }
        else {
            alert('Have you entered all the values? Please put x for one box. This is the value which will be calculated');
        }
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