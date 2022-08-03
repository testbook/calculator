const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumber = document.getElementById('inputNumber');
const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');



window.onload = function() {

    switch (calcType) {
        case "fraction-square-root":
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
    if (!inputNumberFirst.checkValidity() || inputNumberFirst.validity.patternMismatch) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }
    else if(!inputNumberSecond.checkValidity() || inputNumberSecond.validity.patternMismatch){
        inputNumberSecond.parentElement.classList.add('has-error');
        
    }else{
        let finalValue = Math.sqrt(inputNumberFirst.value) / Math.sqrt(inputNumberSecond.value);
        resultBox.value = Math.round((finalValue + Number.EPSILON) * 1000) / 1000;
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

        if(inputNumberFirst.value.length !== 0 && inputNumberSecond.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
        

    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}