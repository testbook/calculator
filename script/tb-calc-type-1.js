const params = new URLSearchParams(window.location.search)
const calcType = params.get('type');


const calcTitleTxt = document.getElementById('cardTitle');
const calcEmptyBody = document.getElementById('cardBody');
const calcInputText = document.getElementById('inputText');
const calcInputAnsText = document.getElementById('inputAnsText');
const calcHelpherText = document.getElementById('cardHelpher');
const calcAnsText = document.getElementById('cardAnsTxt');


const errorAlertText = 'Should be minimum 1 character.';

const inputSelector = document.getElementById('inputValNumber');
const resultSelector = document.getElementById('resultValNumber');
const errorAlertSelector = document.getElementById('errorAlert');



window.onload = function() {
    
    calcTitleTxt.innerText = `${calcType.substring(0, calcType.search(2))} to ${calcType.substring(calcType.search(2)+1)} Calculator`;
    calcInputText.innerText = `${calcType.substring(0, calcType.search(2))}`;
    calcInputAnsText.innerText = `${calcType.substring(calcType.search(2)+1)}`;

    switch (calcType) {

        case "billion2rupees":
        calcHelpherText.innerText = 'Ex: 1 Billion = 1000000000 Rupees';
        break;
        case "million2rupees":
        calcHelpherText.innerText = 'Ex: 1 Million = 1000000 Rupees';
        break;
        case "feet2centimeter":
        calcHelpherText.innerText = 'Ex: 1 = 30.48cm';
        break;  
        case "gallon2liter":
        calcHelpherText.innerText = 'Ex: 1 Gallon = 3.785 Liter';
        break;
        case "millimeter2centimeter":
        calcHelpherText.innerText = 'Ex: 1mm = 0.1 cm';
        break;
        case "million2lakhs":
        calcHelpherText.innerText = 'Ex: 1 Million = 10 Lakhs';
        break;
        case "metre2feet":
        calcHelpherText.innerText = 'Ex: 1 Meter = 3.281 Feet';
        break;
        case "lbs2kg":
        calcHelpherText.innerText = 'Ex: 1 lbs = 0.45359 Kg';
        break;
        case "million2crore":
        calcHelpherText.innerText = 'Ex: 1 Million = .1 Crore';
        break;
        case "meter2centimeter":
        calcHelpherText.innerText = 'Ex: 1 Meter = 100 CM';
        break;
        case "centimeter2meter":
        calcHelpherText.innerText = 'Ex: 1 Cm = 0.01';
        break;
        case "centimeter2millimeter":
        calcHelpherText.innerText = 'Ex: 1 Centimeter = 10 Millimeter';
        break;
        case "centimeter2foot":
        calcHelpherText.innerText = 'Ex: 1 Centimeter = 0.033 Foot';
        break;
        case "centimeter2kilometer":
        calcHelpherText.innerText = 'Ex: 1 Centimeter = 0.00001 KiloMeter';
        break;
        case "inch2feet":
        calcHelpherText.innerText = 'Ex: 1 Inch = 0.083 Feet';
        break;
        case "meter2millimeter":
        calcHelpherText.innerText = 'Ex: 1 Meter = 1000 Meter';
        break;
        case "meter2kilometer":
        calcHelpherText.innerText = 'Ex: 1 Meter = 0.001 KiloMeter';
        break;
        case "meter2inch":
        calcHelpherText.innerText = 'Ex: 1 Meter = 39.370 Inch';
        break;
        case "kilometer2mile":
        calcHelpherText.innerText = 'Ex: 1 Kilometer = 6.214 Mile';
        break;
        case "cubicfeet2cubicmeter":
        calcTitleTxt.innerText = 'Cubic Foot To Cubic Meter Calculator'
        calcHelpherText.innerText = 'Ex: 1 Cubic Foot = 0.028 Cubic Meter';
        break;
        case "hour2minute":
        calcHelpherText.innerText = 'Ex: 1 Hour = 60 Minutes';
        break;
        case "acre2sqmeter":
        calcHelpherText.innerText = 'Ex: 1 Acre = 4046.856 Square meter';
        break;
        case "squarefoot2squarmeter":
        calcHelpherText.innerText = 'Ex: 1 Square foot = 0.09290304 Square meter';
        break;
        case "cubicinch2liter":
        calcHelpherText.innerText = 'Ex: 1 Cubic Inch = 0.016 Liter';
        break;
        case "millimeter2inch":
        calcHelpherText.innerText = 'Ex: 1 mm = 0.03937007874 Inch';
        break;
        case "decameter2meter":
        calcHelpherText.innerText = 'Ex: 1 dam = 10 m';
        break;
        case "squaremeter2acre":
        calcHelpherText.innerText = 'Ex: 1 sq.m = 0.00024710538146717 Acre';
        break;
        case "acre2squarefeet":
        calcHelpherText.innerText = 'Ex: 1 Acre = 43560 sq ft.';
        break;
        case "squarefoot2acer":
        calcHelpherText.innerText = 'Ex: 43560 square feet in 1 acre';
        break;
        case "meter2yard":
        calcHelpherText.innerText = 'Ex: 1 Meter = 1.09361 Yards';
        break;
        case "cubicfoot2quart":
        calcHelpherText.innerText = 'Ex: 1 Cubic Foot = 29.9221 Liquid Quart';
        break;
        case "decameter2kilometer":
        calcHelpherText.innerText = 'Ex: 1 Decameter = 0.01 Kilometer';
        break;
        case "inch2yard":
        calcHelpherText.innerText = 'Ex: 1 Inch = 0.0277777778 Yards';
        break;
        case "squaremile2acre":
        calcHelpherText.innerText = 'Ex: 1 Square Mile = 640 Acre';
        break;
        case "cubicfoot2cubicyard":
        calcHelpherText.innerText = 'Ex: 1 Cubic Foot = 0.037037 Cubic Yard';
        break;
        case "cubicfoot2liter":
        calcHelpherText.innerText = 'Ex: 1 Cubic Foot = 28.31685 Liter';
        break;
        case "cubicfoot2inch":
        calcHelpherText.innerText = 'Ex: 1 Cubic Foot = 1728 Cubic Inch';
        break;
        case "squaremile2are":
        calcHelpherText.innerText = 'Ex: 1 square mile = 25899.92 are';
        break;
        case "cubicinch2imperialgallon":
        calcHelpherText.innerText = 'Ex: 1 Cubic Inch = 0.00360465 Imperial Gallon';
        break;
        case "cubicfoot2gallon":
        calcHelpherText.innerText = 'Ex: 1 cubic foot = 7.48051948 US gallons';
        break;
        case "decameter2millimeter":
        calcHelpherText.innerText = 'Ex: 1 Decameter = 10000 Millimeter';
        break;
        case "decameter2statutemiles":
        calcHelpherText.innerText = 'Ex: 1 Decameter = 0.006 Statute Miles';
        break;
        default:
        calcTitleTxt.innerText = 'wrong url';
        calcEmptyBody.innerHTML = `<div class="card__empty"><h3>Wrong URl</h3></div>`
    }
};


function calculateFun() {

    var userHelpText = function(calcValue){    
        return `${inputSelector.value} ${calcInputText.innerText} = ${calcValue} ${calcInputAnsText.innerText}`;
    } 

    if(!inputSelector.checkValidity() || inputSelector.validity.patternMismatch) {
        inputSelector.parentElement.classList.add('has-error');
        resultSelector.value = "";
        calcAnsText.innerText = "";
    }
    else if(calcType === 'billion2rupees'){
     resultSelector.value = Math.round(Number(inputSelector.value)*1000*1000000* 1000) / 1000;
     calcAnsText.innerText = userHelpText(resultSelector.value);
    } 
    else if(calcType === 'million2rupees'){
     resultSelector.value = Math.round(Number(inputSelector.value)*1000000* 1000) / 1000;
     calcAnsText.innerText = userHelpText(resultSelector.value);
    } 
    else if(calcType === 'feet2centimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*30.48 * 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'gallon2liter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*3.78541* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'millimeter2centimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.1* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'million2lakhs'){
        resultSelector.value = Math.round(Number(inputSelector.value)*10* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'metre2feet'){
        resultSelector.value = Math.round(Number(inputSelector.value)*3.28084* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'centimeter2foot'){
        resultSelector.value = Math.round(Number(inputSelector.value)/30.48* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'lbs2kg'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.45359237* 10000) / 10000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'million2crore'){
        resultSelector.value = Number(inputSelector.value)/10;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'meter2centimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*100* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'centimeter2meter'){
        resultSelector.value = inputSelector.value/100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'centimeter2millimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*10* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'centimeter2kilometer'){
        resultSelector.value = inputSelector.value/100000* 1000 / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'inch2feet'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.08333* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'meter2millimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*1000* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'meter2kilometer'){
        resultSelector.value = Math.round(Number(inputSelector.value)/1000* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'meter2inch'){
        resultSelector.value = Math.round(Number(inputSelector.value)*39.37007874* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'kilometer2mile'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.6213711922* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicfeet2cubicmeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)/35.315* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'hour2minute'){
        resultSelector.value = Math.round(Number(inputSelector.value)*60* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'acre2sqmeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*4046.856422* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'squarefoot2squarmeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.09290304* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicinch2liter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.016387064* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'millimeter2inch'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.03937007874* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'decameter2meter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*10* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'squaremeter2acre'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.00024710538146717* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'acre2squarefeet'){
        resultSelector.value = Math.round(Number(inputSelector.value)*43560* 100) / 100;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'squarefoot2acer'){
        resultSelector.value = Math.round(Number(inputSelector.value)/43560* 1000)/1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'meter2yard'){
        resultSelector.value = Math.round(Number(inputSelector.value)*1.09361* 1000)/1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicfoot2quart'){
        resultSelector.value = Math.round(Number(inputSelector.value)*29.9221* 1000)/1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'decameter2kilometer'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.01* 1000)/1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'inch2yard'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.0277777778* 1000)/1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'squaremile2acre'){
        resultSelector.value = Math.round(Number(inputSelector.value)*640* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicfoot2cubicyard'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.037037* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicfoot2inch'){
        resultSelector.value = Math.round(Number(inputSelector.value)*1728* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'squaremile2are'){
        resultSelector.value = Math.round(Number(inputSelector.value)*25899.92* 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicinch2imperialgallon'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.00360465 * 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'cubicfoot2gallon'){
        resultSelector.value = Math.round(Number(inputSelector.value)*7.48051948 * 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'decameter2millimeter'){
        resultSelector.value = Math.round(Number(inputSelector.value)*1000 * 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
    }
    else if(calcType === 'decameter2statutemiles'){
        resultSelector.value = Math.round(Number(inputSelector.value)*0.006 * 1000) / 1000;
        calcAnsText.innerText = userHelpText(resultSelector.value);
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
    calcAnsText.innerText = "";
}