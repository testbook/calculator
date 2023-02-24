const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumber = document.getElementById('inputNumber');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');


window.onload = function () {
    switch (calcType) {
        case "mean-deviation-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};

function splitNum(num) {
    return num.split(",");
}

function calculateFun() {
    if (!inputNumber.checkValidity()) {
        inputNumber.parentElement.classList.add('has-error');
    }
    else {
        let init = splitNum(inputNumber.value);
        let meanInit = 0;
        let meanValue = 0;
        let deviInit = 0;
        let deviValue = 0;
        for (let i = 0; i < init.length; i++) {
            meanInit += Number(init[i]);
        }
        meanValue = meanInit / init.length;
        resultBoxFirst.value = meanValue.toFixed(3);

        for (let i = 0; i < init.length; i++) {
            deviInit += Math.abs(Number(init[i]) - meanValue);
        }
        deviValue = deviInit / init.length;
        resultBoxSecond.value = deviValue.toFixed(3);
    }

}



function onkeyPressFun() {
    inputNumber.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {
        if (inputNumber.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumber.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputNumber.parentElement.classList.remove('has-error');
    inputNumber.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
}