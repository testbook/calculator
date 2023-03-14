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
        case "additive-inverse-calculator":
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
    if (!inputNumber.checkValidity() || inputNumber.validity.patternMismatch) {
        inputNumber.parentElement.classList.add('has-error');
    }else{

        resultBox.value = inputNumber.value * -1;
       
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
    resultBox.value = "";
}