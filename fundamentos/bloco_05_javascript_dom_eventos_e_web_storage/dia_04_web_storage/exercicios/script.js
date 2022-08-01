window.onload = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = localStorage["backgroundColor"];
    document.getElementsByTagName("body")[0].style.color = localStorage["fontColor"];
    document.getElementsByTagName("body")[0].style.fontSize = localStorage["fontSize"];
    document.getElementsByTagName("body")[0].style.lineHeight = localStorage["spacingSize"];
    document.getElementsByTagName("body")[0].style.fontFamily = localStorage["fontFamily"];
}

// ESCOLHE A COR PARA O BACKGROUND

let backgroundColorInput = document.getElementById("color-input-01");

backgroundColorInput.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor() {
    let color = backgroundColorInput.value;
    localStorage.setItem("backgroundColor", color);
    document.getElementsByTagName("body")[0].style.backgroundColor = localStorage["backgroundColor"];
}

// ESCOLHE COR PARA A FONTE 

let fontColorInput = document.getElementById("color-input-02");

fontColorInput.addEventListener("input", changeFontColor);

function changeFontColor() {
    let color = fontColorInput.value;
    localStorage.setItem("fontColor", color);
    document.getElementsByTagName("body")[0].style.color = localStorage["fontColor"];
}

// ESCOLHE O TAMANHO DA FONTE

let fontSizeInput = document.getElementById("font-size-input");

fontSizeInput.addEventListener("input", changeFontSize);

function changeFontSize() {
    let size = fontSizeInput.value + "px";
    localStorage.setItem("fontSize", size);
    document.getElementsByTagName("body")[0].style.fontSize = localStorage["fontSize"];
}

// ESCOLHE O ESPACAMENTO ENTRE AS LINHAS

let fontSpacingInput = document.getElementById("font-spacing-input");

fontSpacingInput.addEventListener("input", changeSpacingSize);

function changeSpacingSize() {
    let spacingSize = fontSpacingInput.value + "px";
    localStorage.setItem("spacingSize", spacingSize);
    document.getElementsByTagName("body")[0].style.lineHeight = localStorage["spacingSize"];
}

// ESCOLHE O TIPO DA FONTE

let fontFamilySelect = document.getElementById("font-family-select");

fontFamilySelect.addEventListener("input", changeFontFamily);

function changeFontFamily() {
    let fontFamily = fontFamilySelect.value;
    console.log(fontFamily);
    localStorage.setItem("fontFamily", fontFamily);
    document.getElementsByTagName("body")[0].style.fontFamily = localStorage["fontFamily"];
}