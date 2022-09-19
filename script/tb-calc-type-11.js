const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');
const switchValue = document.getElementById('units');
const resultBoxLabel = document.getElementById('resultBoxLabel');


window.onload = function() {

    switch (calcType) {
        case "moles-grams":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};

function setLabel(){
    if(switchValue.value === "Moles"){
        resultBoxLabel.innerText = "Grams =";
    }else if(switchValue.value === "Grams"){
        resultBoxLabel.innerText = "Moles =";
    }
}

function calculateFun() {
    if (!inputNumberFirst.checkValidity() || inputNumberFirst.validity.patternMismatch) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }
    else if(!inputNumberSecond.checkValidity() || inputNumberSecond.validity.patternMismatch){
        inputNumberSecond.parentElement.classList.add('has-error');
        
    }else{
        console.log(resultBoxLabel.innerText);
        if(switchValue.value === "Moles"){
            resultBoxLabel.innerText = "Grams =";
            let finalValue = inputNumberFirst.value * inputNumberSecond.value;
            resultBox.value = finalValue;
        }else if(switchValue.value === "Grams"){
            resultBoxLabel.innerText = "Moles =";
            let finalValue = inputNumberFirst.value / inputNumberSecond.value;
            resultBox.value = finalValue;
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