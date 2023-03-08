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
];

const inputAddons = [
    { prefix: "1", suffix: "11" },
    { prefix: "2", suffix: "22" },
    { prefix: "3", suffix: "33" },
    { prefix: "4", suffix: "44" },
    { prefix: "5", suffix: "55" },
];

const resultAddons = [
    { prefix: "", suffix: "Kg" },
    { prefix: "X", suffix: "" },
    { prefix: "", suffix: "" },
    { prefix: "", suffix: "" },
    { prefix: "", suffix: "" },
];

const inputSIZE = 5;
const resultSIZE = 5;

const errorAlert = document.getElementById("errorAlert");
const pattern = /.{1}\d|\d|-{1}\d/;

window.onload = function () {
    switch (calcType) {
        case "system-of-equations-calculator":
            dynamicInputs(inputSIZE, inputAddons, 'input');
            dynamicInputs(resultSIZE, resultAddons, 'result');
            break;
        default:
            calcEmptyBody.innerHTML = `
                <div class="card__empty">
                    <h3>Wrong URl</h3>
                </div>
            `;
    }
};


function dynamicInputs(inputLength, inputLabels, isInputResult) {
    if(inputLabels.length === inputLength) {
        if (isInputResult === 'input') {
            let inputsDiv = document.getElementById("inputs");
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
                inputsDiv.appendChild(inputParent);
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
    }else {
        console.error("Error: length of inputs and prefexies does not match");
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
