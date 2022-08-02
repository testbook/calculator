const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumber = document.getElementById('inputNumber');
const resultBox = document.getElementById('resultBox');
const resulBoxNumber = document.getElementById('resultBoxNumber');
const errorAlert = document.getElementById('errorAlert');



window.onload = function() {

    switch (calcType) {
        case "standard-form":
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
    }
    else{

        let checkValue = 10;
        let checkSignDown =  ^;
        let checkSignUp = v;
        

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
    resulBoxNumber.value = "";
    resultBox.value = "";
}