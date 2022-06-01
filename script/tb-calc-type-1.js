const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');


const calcTitleTxt = document.getElementById('cardTitle');
const calcEmptyBody = document.getElementById('cardBody');
const calcInputText = document.getElementById('inputText');
const calcInputAnsText = document.getElementById('inputAnsText');
const calcHelpherText = document.getElementById('cardHelpher');

const errorAlertText = 'Should be minimum 1 character.';

const inputSelector = document.getElementById('feetNumber');
const resultSelector = document.getElementById('resultNumber');
const errorAlertSelector = document.getElementById('errorAlert');



window.onload = function() {
    switch (calcType) {
        case "billion2rupees":
        calcTitleTxt.innerText = 'Billion into Rupees Calculator';
        calcInputText.innerText = 'Billion';
        calcInputAnsText.innerText = 'Rupees';
        calcHelpherText.innerText = 'Ex: 1 Billion = 1000000000 Rupees';
        break;
        case "feet2cm":
        calcTitleTxt.innerText = 'Feet to Centimeter Calculator';
        calcInputText.innerText = 'Feet';
        calcInputAnsText.innerText = 'CM';
        calcHelpherText.innerText = 'Ex: 1 = 30.48cm';
        break;  
        case "gallon2liter":
        calcTitleTxt.innerText = 'Gallon to Liter Calculator';
        calcInputText.innerText = 'Gallon';
        calcInputAnsText.innerText = 'Liter';
        calcHelpherText.innerText = 'Ex: 1 Gallon = 3.785 Liter';
        break;
        case "mm2cm":
        calcTitleTxt.innerText = 'mm to cm Calculator';
        calcInputText.innerText = 'mm';
        calcInputAnsText.innerText = 'cm';
        calcHelpherText.innerText = 'Ex: 1mm = 0.1 cm';
        break;
        case "million2lakhs":
        calcTitleTxt.innerText = 'Million to Lakhs Calculator';
        calcInputText.innerText = 'Million';
        calcInputAnsText.innerText = 'Lakhs';
        calcHelpherText.innerText = 'Ex: 1 Million = 10 Lakhs';
        break;
        case "metres2feet":
        calcTitleTxt.innerText = 'Meter To Feet Calculator';
        calcInputText.innerText = 'Meter';
        calcInputAnsText.innerText = 'Feet';
        calcHelpherText.innerText = 'Ex: 1 Meter = 3.281 Feet';
        break;
        case "lbs2kg":
        calcTitleTxt.innerText = 'lbs to kg Calculator';
        calcInputText.innerText = 'lbs';
        calcInputAnsText.innerText = 'kg';
        calcHelpherText.innerText = 'Ex: 1 lbs = 0.45359 Kg';
        break;
        default:
        calcTitleTxt.innerText = 'wrong url';
        calcEmptyBody.innerHTML = `<div class="card__empty"><h3>Wrong URl</h3></div>`
    }
};


function calculateFun() {
    if(!inputSelector.checkValidity() || inputSelector.validity.patternMismatch) {
        inputSelector.parentElement.classList.add('has-error');
        resultSelector.value = "";
    }
    else if(calcType === 'billion2rupees'){
     resultSelector.value = Math.round(Number(inputSelector.value)*1000*1000000* 1000) / 1000;
 }
 else if(calcType === 'feet2cm'){
    resultSelector.value = Math.round(Number(inputSelector.value)*30.48 * 100) / 100;
}
else if(calcType === 'gallon2liter'){
    resultSelector.value = Math.round(Number(inputSelector.value)*3.78541* 1000) / 1000;
}
else if(calcType === 'mm2cm'){
    resultSelector.value = Math.round(Number(inputSelector.value)*0.1* 100) / 100;
}
else if(calcType === 'million2lakhs'){
    resultSelector.value = Math.round(Number(inputSelector.value)*10* 100) / 100;
}
else if(calcType === 'metres2feet'){
    resultSelector.value = Math.round(Number(inputSelector.value)*3.28084* 1000) / 1000;
}
else if(calcType === 'lbs2kg'){
    resultSelector.value = Math.round(Number(inputSelector.value)*0.45359237* 10000) / 10000;
}


}

function onkeyPressFun(){
    inputSelector.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    checkEvent(event);
}

function checkEvent(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
    }
    if (event.code === 'Space') {
        
        if(inputSelector.value.length == 0){
            errorAlertSelector.innerHTML = errorAlertText;
            inputSelector.parentElement.classList.add('has-error'); 
        }
    }
}

function resetFun(){
    inputSelector.parentElement.classList.remove('has-error');
    errorAlertSelector.innerHTML = '';
    inputSelector.value = "";
    resultSelector.value =  "";
}