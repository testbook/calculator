const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');
const resultBox = document.getElementById('resultBox');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d|-{1}.{1}\d/;


window.onload = function() {

    switch (calcType) {
        case "rate-of-change-calculator":
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
    if (!inputNumberFirst.checkValidity() || !pattern.test(inputNumberFirst.value)) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }else if(!inputNumberSecond.checkValidity() || !pattern.test(inputNumberSecond.value)){
        inputNumberSecond.parentElement.classList.add('has-error');
    }else if(!inputNumberThird.checkValidity() || !pattern.test(inputNumberThird.value)){
        inputNumberThird.parentElement.classList.add('has-error');
    }else if(!inputNumberFourth.checkValidity() || !pattern.test(inputNumberFourth.value)){
        inputNumberFourth.parentElement.classList.add('has-error');
    }else{
        x1 = parseFloat(inputNumberFirst.value);
        y1 = parseFloat(inputNumberSecond.value);
        x2 = parseFloat(inputNumberThird.value);
        y2 = parseFloat(inputNumberFourth.value);

        resultBox.value = (x2-x1) == 0 ? "undefined" : ((y2-y1)/(x2-x1)).toFixed(3);
    
    }

}



function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
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
        }else if(inputNumberSecond.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }else if(inputNumberThird.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        }else if(inputNumberFourth.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFourth.parentElement.classList.add('has-error');
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
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFourth.value = ""
    errorAlertSelector.innerHTML = "";
    resultBox.value = "";
}