// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", eventoHref);

function eventoHref(event) {
    event.preventDefault();
} 

INPUT_CHECKBOX.addEventListener("click", eventCheckbox);

function eventCheckbox(event) {
    event.preventDefault();
}

INPUT_TEXT.addEventListener("keypress", eventText);

function eventText(event) {
    if (event.key != "a") {
        event.preventDefault(); 
    }
}