const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d/;



window.onload = function() {

    switch (calcType) {
        case "simplest-form-calculator":
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
    }else{
        a = inputNumberFirst.value;
        b = inputNumberSecond.value;
        reduce(a, b);
    }

}

function reduce(number,denomin){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(number,denomin);
    resultBoxFirst.value = number/gcd;
    resultBoxSecond.value =  denomin/gcd;
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
        }else if(inputNumberSecond.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberSecond.value = ""
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
}