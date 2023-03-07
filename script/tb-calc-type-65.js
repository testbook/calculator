const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');
const inputNumberFifth = document.getElementById('inputNumberFifth');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function() {

    switch (calcType) {
        case "perpendicular-line-calculator":
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
    }
    else if(!inputNumberSecond.checkValidity() || !pattern.test(inputNumberSecond.value)){
        inputNumberSecond.parentElement.classList.add('has-error'); 
    } else if(!inputNumberThird.checkValidity() || !pattern.test(inputNumberThird.value)){
        inputNumberThird.parentElement.classList.add('has-error'); 
    } else if(!inputNumberFourth.checkValidity() || !pattern.test(inputNumberFourth.value)){
        inputNumberFourth.parentElement.classList.add('has-error'); 
    } else if(!inputNumberFifth.checkValidity() || !pattern.test(inputNumberFifth.value)){
        inputNumberFifth.parentElement.classList.add('has-error'); 
    }else{
        let x = Number(inputNumberFirst.value);
        let y = Number(inputNumberSecond.value);
        let c = Number(inputNumberThird.value);

        let x0 = Number(inputNumberFourth.value);
        let y0 = Number(inputNumberFifth.value);


        let lineEquation = [x, y, c];
        let point = { x : x0, y : y0 };
        let a = calculatePerpendicularLine(lineEquation, point);

        resultBoxFirst.value = a.x.toFixed(2);
        resultBoxSecond.value = a.c.toFixed(2);
    } 

}

function calculatePerpendicularLine(lineEquation, point) {
    // Extract coefficients A, B, and C from the line equation
    const A = lineEquation[0];
    const B = lineEquation[1];
    const C = lineEquation[2];
    
    // Calculate the slope (m) of the original line
    const m = -A / B;
    
    // Calculate the slope (m2) of the perpendicular line
    const m2 = -1 / m;
    
    // Calculate the y-intercept (b2) of the perpendicular line
    const b2 = point.y - m2 * point.x;

    // Return the equation of the perpendicular line in the form "y = mx + b"
    return {
        x : m2,
        c : b2
    };
}
   



function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFifth.parentElement.classList.remove('has-error');
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

        if(inputNumberSecond.value.length !== 0 && inputNumberSecond.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }

        if(inputNumberThird.value.length !== 0 && inputNumberThird.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        }

        if(inputNumberFourth.value.length !== 0 && inputNumberFourth.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFourth.parentElement.classList.add('has-error');
        }

        if(inputNumberFifth.value.length !== 0 && inputNumberFifth.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFifth.parentElement.classList.add('has-error');
        }

    }
}

function resetFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFifth.parentElement.classList.remove('has-error');
    inputNumberFirst.value = "";
    inputNumberSecond.value = "";
    inputNumberThird.value = "";
    inputNumberFourth.value = "";
    inputNumberFifth.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
}