const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');
const pattern= /.{1}\d|\d|-{1}\d/;
window.onload = function() {

    switch (calcType) {
        case "volume-of-cubiod":
            break;
            default:
                calcEmptyBody.innerHTML= `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
}

function calculateFun() {
    if (!inputNumberFirst.checkValidity() || inputNumberFirst.validity.patternMismatch) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }
    else if(!inputNumberSecond.checkValidity() || inputNumberSecond.validity.patternMismatch){
        inputNumberSecond.parentElement.classList.add('has-error');   
    }
    else if(!inputNumberThird.checkValidity() || inputNumberThird.validity.patternMismatch){
        inputNumberThird.parentElement.classList.add('has-error');   
    }else{
        
        let length = inputNumberFirst.value;
        let width = inputNumberSecond.value;
        let height = inputNumberThird.value;
    
        let volume = length * width * height;
        
        resultBox.value = volume.toFixed(3);
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

        if(inputNumberFirst.value.length !== 0 && inputNumberSecond.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }

        if(inputNumberSecond.value.length !== 0 && inputNumberThird.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
    }
}


function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.value = "";
    inputNumberThird.value = "";
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}