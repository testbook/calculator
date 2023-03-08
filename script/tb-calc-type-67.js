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

const inputSIZE = 5;
const resultSIZE = 5;

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
            if (inputLabels[i].prefix != "") {
                inputAddonPrefix.className = "input-addon";
                inputAddonPrefix.innerHTML = inputLabels[i].prefix;
            }
            if (inputLabels[i].suffix != "") {
                inputAddonSuffix.className = "input-addon";
                inputAddonSuffix.innerHTML = inputLabels[i].suffix;
            }
            let inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.name = `inputNumber${numWords[i]}`;
            inputBox.id = inputBox.name;
            inputBox.onkeydown = onkeyPressFun();
            inputBox.required = true;
            inputParent.appendChild(inputAddonPrefix);
            inputParent.appendChild(inputBox);
            inputParent.appendChild(inputAddonSuffix);
            attatchTo.appendChild(inputParent);
        }

    } else if (isInputResult === 'result') {
        let resultDiv = document.getElementById("result");
        for (let i = 0; i < inputLength; i++) {
            let resultParent = document.createElement("div");
            resultParent.className = "input-group";

            let resultAddonPrefix = document.createElement("span");
            let resultAddonSuffix = document.createElement("span");

            if (inputLabels[i].prefix != "") {
                resultAddonPrefix.className = "input-addon";
                resultAddonPrefix.innerHTML = inputLabels[i].prefix;
            }
            if (inputLabels[i].suffix != "") {
                resultAddonSuffix.className = "input-addon";
                resultAddonSuffix.innerHTML = inputLabels[i].suffix;
            }

            let resultBox = document.createElement("input");
            resultBox.type = "text";
            resultBox.name = `resultBox${numWords[i]}`;
            resultBox.id = resultBox.name;
            resultBox.required = true;

            resultParent.appendChild(resultAddonPrefix);
            resultParent.appendChild(resultBox);
            resultParent.appendChild(resultAddonSuffix);
            resultDiv.appendChild(resultParent);
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
        // add logic
        console.log("Hello");
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