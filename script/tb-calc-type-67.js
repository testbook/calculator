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
    { prefix: "", suffix: "x" },
    { prefix: "", suffix: "y" },
    { prefix: "", suffix: "z" },
    { prefix: "", suffix: "" },
    { prefix: "", suffix: "x" },
    { prefix: "", suffix: "y" },
    { prefix: "", suffix: "z" },
    { prefix: "", suffix: "" },
    { prefix: "", suffix: "x" },
    { prefix: "", suffix: "y" },
    { prefix: "", suffix: "z" },
    { prefix: "", suffix: "" },
];

const resultAddons = [
    { prefix: "X = ", suffix: "" },
    { prefix: "Y = ", suffix: "" },
    { prefix: "Z = ", suffix: "" },
];

const inputSpans = [
    '',
    '+',
    '+',
    '=',
    '',
    '+',
    '+',
    '=',
    '',
    '+',
    '+',
    '=',
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
        case "system-of-equations-calculator":
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
        let resultDiv = document.getElementById("result");
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
            resultDiv.appendChild(resultParent);
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
            inputVars.push(Number(inputVar));
        }

        let eq1 = [inputVars[0], inputVars[1], inputVars[2], inputVars[3]];
        let eq2 = [inputVars[4], inputVars[5], inputVars[6], inputVars[7]];
        let eq3 = [inputVars[8], inputVars[9], inputVars[10], inputVars[11]];

        let res = solveSystemOfEquations(eq1, eq2, eq3);
        resultBoxFirst.value = res[0];
        resultBoxSecond.value = res[1];
        resultBoxThird.value = res[2];
    }

}
function findDeterminant(eq1, eq2, eq3) {
    const [a1, b1, c1] = eq1;
    const [a2, b2, c2] = eq2;
    const [a3, b3, c3] = eq3;

    return a1*((b2 * c3) - (b3*c2)) - b1 * ((a2*c3) - (a3*c2)) + c1 * ((a2 * b3) - (a3*b2));

}

function findD(eq1, eq2, eq3) {
    let a = [eq1[0], eq1[1], eq1[2]];
    let b = [eq2[0], eq2[1], eq2[2]];
    let c = [eq3[0], eq3[1], eq3[2]];

    return findDeterminant(a, b, c);
}

function findDx(eq1, eq2, eq3) {
    let a = [eq1[3], eq1[1], eq1[2]];
    let b = [eq2[3], eq2[1], eq2[2]];
    let c = [eq3[3], eq3[1], eq3[2]];

    return findDeterminant(a, b, c);
}

function findDy(eq1, eq2, eq3) {
    let a = [eq1[0], eq1[3], eq1[2]];
    let b = [eq2[0], eq2[3], eq2[2]];
    let c = [eq3[0], eq3[3], eq3[2]];

    return findDeterminant(a, b, c);
}

function findDz(eq1, eq2, eq3) {
    let a = [eq1[0], eq1[1], eq1[3]];
    let b = [eq2[0], eq2[1], eq2[3]];
    let c = [eq3[0], eq3[1], eq3[3]];

    return findDeterminant(a, b, c);
}

function solveSystemOfEquations(eq1, eq2, eq3) {
    // Parse the coefficients and constants from the equations
    let d = findD(eq1, eq2, eq3);
    let dx = findDx(eq1, eq2, eq3);
    let dy = findDy(eq1, eq2, eq3);
    let dz = findDz(eq1, eq2, eq3);

    console.log(eq1, eq2, eq3);
    console.log(d);
    console.log(dx);
    console.log(dy);
    console.log(dz);
    
    const x = dx / d;
    const y = dy / d;
    const z = dz / d;
  
    return [x, y, z];
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