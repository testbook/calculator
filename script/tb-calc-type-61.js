const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const inputNumberThird = document.getElementById('inputNumberThird');
const inputNumberFourth = document.getElementById('inputNumberFourth');

const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const resultBoxThird = document.getElementById('resultBoxThird');
const resultBoxFourth = document.getElementById('resultBoxFourth');
const resultBoxFifth = document.getElementById('resultBoxFifth');
const resultBoxSixth = document.getElementById('resultBoxSixth');
const resultBoxSeventh = document.getElementById('resultBoxSeventh');
const resultBoxEight = document.getElementById('resultBoxEight');
const resultBoxNine = document.getElementById('resultBoxNine');
const errorAlert = document.getElementById('errorAlert');

window.onload = function () {
    switch (calcType) {
        case "hyperbola-calculator":
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
    if (!inputNumberFirst.checkValidity()) {
        inputNumberFirst.parentElement.classList.add('has-error');
    }else if (!inputNumberSecond.checkValidity()) {
        inputNumberSecond.parentElement.classList.add('has-error');
    }else if (!inputNumberThird.checkValidity()) {
        inputNumberThird.parentElement.classList.add('has-error');
    }else if (!inputNumberFourth.checkValidity()) {
        inputNumberFourth.parentElement.classList.add('has-error');
    }else {
        x0 = Number(inputNumberFirst.value);
        y0 = Number(inputNumberSecond.value);
        a = Number(inputNumberThird.value);
        b = Number(inputNumberFourth.value);

        let eccentricity = hyperbola(x0, y0, a, b).eccentricity;
        let asymptotes = hyperbola(x0, y0, a, b).asymptotes;

        let f1x = hyperbola(x0, y0, a, b).focus;
        let f2x = hyperbola(x0, y0, a, b).focusC;


        resultBoxFirst.value = f1x.x;
        resultBoxSecond.value = f1x.y;

        resultBoxThird.value = f2x.x;
        resultBoxFourth.value = f2x.y;

        resultBoxFifth.value = eccentricity;

        resultBoxSixth.value = asymptotes.a1.x.toFixed(3);
        resultBoxSeventh.value = asymptotes.a1.y.toFixed(3);
        resultBoxEight.value = asymptotes.a2.x.toFixed(3);
        resultBoxNine.value = asymptotes.a2.y.toFixed(3);
    }
}

function hyperbola(h, k, a, b) {
    const e = Math.sqrt(1 + (b * b) / (a * a));
    let focusX = a*e+h;
    let focusY = k;
    let focusCX = (a*e*-1)+h
    let focusCY = k;
    let asymptotesAX = Math.abs(b/a);
    let asymptotesAY = Math.abs((b/a)+k) 
    let asymptotesBX = Math.abs(b/a*-1);
    let asymptotesBY = Math.abs((b/a)-k);
  
    return {
        eccentricity: e,    
        focus: { 
            x: focusX, 
            y: focusY 
        },
        focusC : { 
            x: focusCX, 
            y: focusCY 
        },
        asymptotes : {
            a1 : { 
                x: asymptotesAX, 
                y: asymptotesAY 
            },
            a2 : { 
                x: asymptotesBX, 
                y: asymptotesBY
            }
        }
    };
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
        }
        if (inputNumberSecond.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        }
        if (inputNumberThird.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        }
        if (inputNumberFourth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFourth.parentElement.classList.add('has-error');
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
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFourth.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
    resultBoxThird.value = "";
    resultBoxFourth.value = "";
    resultBoxFifth.value = "";
    resultBoxSixth.value = "";
    resultBoxSeventh.value = "";
    resultBoxEight.value = "";
    resultBoxNine.value = "";
}