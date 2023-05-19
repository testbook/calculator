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
    { prefix: "Planet Mass (M) ", suffix: "Kg" },
    { prefix: "Radius from Planet Center (r) ", suffix: "m" },
    { prefix: "Gravitational Acceleration (a) ", suffix: `m/s${'2'.sup()}` },
];

const resultAddons = [
    { prefix: "X = ", suffix: "" },
];

const inputSpans = [
    '',
    '',
    '',
    '',
    '',
    '',
]

const resultSpans = [
];


const inputSIZE = 12;
const resultSIZE = 3;
var inputCount = 0;
var resultCount = 0;

const errorAlert = document.getElementById("errorAlert");
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "acceleration-due-to-gravity-calculator":
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
        let inputVars = []
        for (let i = 0; i < inputCount; i++) {
            let inputVar = document.getElementById(`inputNumber${numWords[i]}`).value;
            inputVars.push(inputVar);
        }

        let [m, r, a] = inputVars;
        let G = 6.6726 * Math.pow(10, -11);

        if(m.toLowerCase() === 'x') {
            resultBoxFirst.value = (a * Math.pow(r, 2)/ G);
        }else if(r.toLowerCase() === 'x') {
            resultBoxFirst.value = Math.sqrt((G * m)/a);
        }else if(a.toLowerCase() === 'x') {
            resultBoxFirst.value = (G * m )/ Math.pow(r, 2);
        }else {
            alert('Have you entered all the values? Please put x for one box. This is the value which will be calculated');
        }

    }

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