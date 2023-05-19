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
const inputNumberSixth = document.getElementById('inputNumberSixth');
const resultBoxFirst = document.getElementById('resultBoxFirst');
const resultBoxSecond = document.getElementById('resultBoxSecond');
const errorAlert = document.getElementById('errorAlert');
const pattern = /.{1}\d|\d|-{1}\d|-{1}.{1}\d/;


window.onload = function () {

    switch (calcType) {
        case "circumcenter-calculator":
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `
    }
};

function circumcenter(ax, ay, bx, by, cx, cy) {
    var d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    var ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
    var uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
    resultBoxFirst.value = Math.round((ux)*1000)/1000;
    resultBoxSecond.value = Math.round((uy)*1000)/1000;
}

function calculateFun() {
    if (!inputNumberFirst.checkValidity() || !pattern.test(inputNumberFirst.value)) {
        inputNumberFirst.parentElement.classList.add('has-error');
    } else if (!inputNumberSecond.checkValidity() || !pattern.test(inputNumberSecond.value)) {
        inputNumberSecond.parentElement.classList.add('has-error');
    } else if (!inputNumberThird.checkValidity() || !pattern.test(inputNumberThird.value)) {
        inputNumberThird.parentElement.classList.add('has-error');
    } else if (!inputNumberFourth.checkValidity() || !pattern.test(inputNumberFourth.value)) {
        inputNumberFourth.parentElement.classList.add('has-error');
    } else if (!inputNumberFifth.checkValidity() || !pattern.test(inputNumberFifth.value)) {
        inputNumberFifth.parentElement.classList.add('has-error');
    } else if (!inputNumberSixth.checkValidity() || !pattern.test(inputNumberSixth.value)) {
        inputNumberSixth.parentElement.classList.add('has-error');
    } else {
        ax = parseFloat(inputNumberFirst.value);
        ay = parseFloat(inputNumberSecond.value);
        bx = parseFloat(inputNumberThird.value);
        by = parseFloat(inputNumberFourth.value);
        cx = parseFloat(inputNumberFifth.value);
        cy = parseFloat(inputNumberSixth.value);
        circumcenter(ax, ay, bx, by, cx, cy);
    }

}

function onkeyPressFun() {
    inputNumberFirst.parentElement.classList.remove('has-error');
    inputNumberSecond.parentElement.classList.remove('has-error');
    inputNumberThird.parentElement.classList.remove('has-error');
    inputNumberFourth.parentElement.classList.remove('has-error');
    inputNumberFifth.parentElement.classList.remove('has-error');
    inputNumberSixth.parentElement.classList.remove('has-error');
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
        } else if (inputNumberSecond.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSecond.parentElement.classList.add('has-error');
        } else if (inputNumberThird.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberThird.parentElement.classList.add('has-error');
        } else if (inputNumberFourth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFourth.parentElement.classList.add('has-error');
        } else if (inputNumberFifth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberFifth.parentElement.classList.add('has-error');
        } else if (inputNumberSixth.value.length == 0) {
            errorAlertSelector.innerHTML = errorAlertText;
            inputNumberSixth.parentElement.classList.add('has-error');
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
    inputNumberFifth.parentElement.classList.remove('has-error');
    inputNumberFifth.value = "";
    inputNumberSixth.parentElement.classList.remove('has-error');
    inputNumberSixth.value = "";
    errorAlertSelector.innerHTML = "";
    resultBoxFirst.value = "";
    resultBoxSecond.value = "";
}