const params = new URLSearchParams(window.location.search);
const calcType = params.get("type");

const calcEmptyBody = document.getElementById("cardBody");

const errorAlertText = "Should be minimum 1 character.";
const errorAlertSelector = document.getElementById("errorAlert");

const numWords = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Ninteen",
    "Twenty"
];

const inputAddons = [
    { prefix: "Enter the Numbers seperated by (,)", suffix: "" }
];

const resultAddons = [
    { prefix: "Minimum", suffix: "" },
    { prefix: "Maximum", suffix: "" },
    { prefix: "Count", suffix: "" },
    { prefix: "Mean", suffix: "" },
    { prefix: "Median", suffix: "" },
    { prefix: "Mode", suffix: "" },
    { prefix: "Standard Deviation", suffix: "" },
    { prefix: "Variance", suffix: "" }
];

const inputSpans = [
    '',
    '',
    '',
]

const resultSpans = [
    '',
    '',
    '',
];


const inputSIZE = 12;
const resultSIZE = 3;
var inputCount = 0;
var resultCount = 0;

const errorAlert = document.getElementById("errorAlert");
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "statistics-calculator":
            inputGenerator();
            resultBoxGenerator();
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `;
    }
};

function inputGenerator() {

    let inputs = document.querySelectorAll('#parentDiv #inputs');
    let req = [];

    for (let i = 0; i < inputs.length; i++) {
        req.push(Number(inputs[i].getAttribute("reqd-inputs")));
    }

    for (let i = 0; i < req.length; i++) {
        dynamicInputs(req[i], inputAddons, 'input', inputs[i]);
    }
}

function resultBoxGenerator() {
    let resultBox = document.querySelectorAll('#parentDiv #result');
    let req = [];

    for (let i = 0; i < resultBox.length; i++) {
        req.push(Number(resultBox[i].getAttribute("reqd-inputs")));
    }

    for (let i = 0; i < req.length; i++) {
        dynamicInputs(req[i], resultAddons, 'result', resultBox[i]);
    }
}

function dynamicInputs(inputLength, inputLabels, isInputResult, attatchTo) {
    if (isInputResult === 'input') {
        for (let i = 0; i < inputLength; i++) {
            let inputParent = document.createElement("div");
            inputParent.className = "input-group";
            let inputAddonPrefix = document.createElement("span");
            let inputAddonSuffix = document.createElement("span");
            if (inputLabels[inputCount].prefix != "") {
                inputAddonPrefix.className = "input-addon";
                inputAddonPrefix.innerHTML = inputLabels[inputCount].prefix;
            }
            if (inputLabels[inputCount].suffix != "") {
                inputAddonSuffix.className = "input-addon";
                inputAddonSuffix.innerHTML = inputLabels[inputCount].suffix;
            }
            let inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.name = `inputNumber${numWords[inputCount]}`;
            inputBox.id = inputBox.name;
            inputBox.onkeydown = onkeyPressFun();
            inputBox.required = true;
            inputParent.appendChild(inputAddonPrefix);
            inputParent.appendChild(inputBox);
            inputParent.appendChild(inputAddonSuffix);
            attatchTo.appendChild(inputParent);
            addBeforeInputs(inputSpans[i], document.getElementById(`inputNumber${numWords[inputCount]}`));
            inputCount++;
        }

    } else if (isInputResult === 'result') {
        for (let i = 0; i < inputLength; i++) {
            let resultParent = document.createElement("div");
            resultParent.className = "input-group";

            let resultAddonPrefix = document.createElement("span");
            let resultAddonSuffix = document.createElement("span");

            if (inputLabels[resultCount].prefix != "") {
                resultAddonPrefix.className = "input-addon";
                resultAddonPrefix.innerHTML = inputLabels[resultCount].prefix;
            }
            if (inputLabels[resultCount].suffix != "") {
                resultAddonSuffix.className = "input-addon";
                resultAddonSuffix.innerHTML = inputLabels[resultCount].suffix;
            }

            let resultBox = document.createElement("input");
            resultBox.type = "text";
            resultBox.name = `resultBox${numWords[resultCount]}`;
            resultBox.id = resultBox.name;
            resultBox.disabled = true;

            resultParent.appendChild(resultAddonPrefix);
            resultParent.appendChild(resultBox);
            resultParent.appendChild(resultAddonSuffix);
            attatchTo.appendChild(resultParent);
            addBeforeInputs(resultSpans[i], document.getElementById(`resultBox${numWords[resultCount]}`));
            resultCount++;
        }
    }
}

function calculateFun() {
    let n = inputAddons.length;
    let status = true;
    let inputDynamic;
    for(let i = 0; i < n; i++) {
        inputDynamic = document.getElementById(`inputNumber${numWords[i]}`);
        if(!inputDynamic.checkValidity()) {
            inputDynamic.parentElement.classList.add("has-error");
            status = false;
            break;
        }
    }
    if(status === true) {
        let inputVars = [];
        inputVars = inputNumberFirst.value.split(",").map(Number);
        let sum = 0, median, variance = 0;
        for (let i = 0; i < inputVars.length; i++) {
            sum += inputVars[i];
        }
        for (let i = 0; i < inputVars.length; i++) {
            variance += Math.pow(inputVars[i] - (sum/inputVars.length), 2); 
        }
        inputVars.sort((a, b) => a-b);
        if(inputVars.length % 2 == 0) {
            median = (inputVars[inputVars.length/2] + inputVars[(inputVars.length/2) - 1]) / 2;
        }else {
            median = inputVars[Math.ceil(inputVars.length/2) - 1];
        }

        resultBoxFirst.value = inputVars[0];
        resultBoxSecond.value = inputVars[inputVars.length-1];
        resultBoxThird.value = inputVars.length;
        resultBoxFourth.value = sum/inputVars.length;
        resultBoxFifth.value = median;
        resultBoxSixth.value = calculateMode(inputVars);
        resultBoxSeventh.value = Math.sqrt(variance/inputVars.length-1);
        resultBoxEighth.value = variance/inputVars.length-1;
    }
}

function allEqual(array) {
    return Array.prototype.every.call(array, v => v === array[0]);
}  

function calculateMode(array) {
    // Create an object to store the count of each number in the array.
    const counts = {};
    for (const number of array) {
      counts[number] = (counts[number] || 0) + 1;
    }
  
    // Find the key with the highest count.
    let maxCount = 0;
    let mode;
    for (const [key, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        mode = key;
      }
    }
  
    // If the frequency of all numbers are equal, return 'No'.
    if (allEqual(counts)) {
      mode = 'NO Mode';
    }
  
    // Return the mode.
    return mode;
}
  
  

function onkeyPressFun() {
    let n = inputSIZE;
    let inputDynamic;
    for (let i = 0; i < n; i++) {
        inputDynamic = document.getElementById(`inputNumber${numWords[i]}`);
        if(inputDynamic) {
            inputDynamic.parentElement.classList.remove("has-error");
        }
    }
    errorAlertSelector.innerHTML = "";
    checkEvent(event, n);
}

function checkEvent(event, n) {
    if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
    }
    if (event.code === "Space") {
        let inputDynamic;
        for (let i = 0; i < n; i++) {
            inputDynamic = document.getElementById(`inputNumber${numWords[i]}`);
            if(inputDynamic && inputDynamic.value.length == 0)  {
                errorAlertSelector.innerHTML = errorAlertText;
                inputDynamic.parentElement.classList.add("has-error");
                break;
            }
        }
    }
}

function resetFun() {
    let inputDynamic;
    let resultDynamic;
    for (let i = 0; i < inputSIZE; i++) {
        inputDynamic = document.getElementById(`inputNumber${numWords[i]}`);
        if(inputDynamic) {
            inputDynamic.parentElement.classList.remove("has-error");
            inputDynamic.value = "";
        }
    }

    for (let i = 0; i < resultSIZE; i++) {
        resultDynamic = document.getElementById(`resultBox${numWords[i]}`);
        if(resultDynamic) {
            resultDynamic.value = "";
        }
    }
    errorAlertSelector.innerHTML = "";
}

function addBeforeInputs(innerHTML, nodeAfter){
    if(innerHTML != undefined){
        let spanText = document.createElement("span");
        spanText.classList.add("mb-1");
        let nodeParent = nodeAfter.parentNode;
        let NodeSuperParent = nodeParent.parentNode
        spanText.innerHTML = innerHTML;
        NodeSuperParent.insertBefore(spanText, nodeParent);
    }
}