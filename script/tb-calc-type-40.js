const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');

const calcEmptyBody = document.getElementById('cardBody');

const errorAlertText = 'Should be any number';
const errorAlertSelector = document.getElementById('errorAlert');

const inputNumberFirst = document.getElementById('inputNumberFirst');
const inputNumberSecond = document.getElementById('inputNumberSecond');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const resultBoxThird = document.getElementById('resultBoxThird');
const resultBoxFourth = document.getElementById('resultBoxFourth');
const resultBoxFifth = document.getElementById('resultBoxFifth');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "covariance-calculator":
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
    }else {
        let xi = inputNumberFirst.value.split(',').map(toNumber);
        let yi = inputNumberSecond.value.split(',').map(toNumber);
        if(xi.length === yi.length){
            resultBoxThird.value = xi.length || yi.length;
            resultBoxFirst.value = mean(xi);
            resultBoxSecond.value = mean(yi);
            resultBoxFourth.value = covariance(xi, yi, mean(xi), mean(yi)).sample;
            resultBoxFifth.value = covariance(xi, yi, mean(xi), mean(yi)).population;
        }else {
            errorAlertSelector.innerHTML = "X and Y should have same number of elements";
            resultBoxFirst.value = "";
            resultBoxSecond.value = "";
            resultBoxThird.value = "";
            resultBoxFourth.value = "";
            resultBoxFifth.value = "";
        }
    }

}

function toNumber(value) {
    return Number(value);
}

function mean(values) {
    let sum = 0;
    let n = values.length;
    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum/n;
}

function covariance(x, y, meanx, meany) {
    let n = x.length || y.length;
    let mi = 0;

    for(let i = 0; i < n; i++){
        mi += (x[i] - meanx) * (y[i] - meany);
    }

    return {
        sample: ((mi)/(n-1)).toFixed(2),
        population: (mi/n).toFixed(2)
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
        }else if (inputNumberSecond.value.length == 0) {
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
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
    resultBoxThird.value = "";
    resultBoxFourth.value = "";
    resultBoxFifth.value = "";
}