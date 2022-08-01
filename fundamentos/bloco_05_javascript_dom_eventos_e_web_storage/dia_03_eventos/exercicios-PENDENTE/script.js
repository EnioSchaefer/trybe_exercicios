function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let diasUl = document.getElementById("days");

for (let index = 0; index < decemberDaysList.length; index += 1) {
    diasUl.appendChild(document.createElement("li")).innerHTML = decemberDaysList[index];
    diasUl.getElementsByTagName("li")[index].className = "day";
}

let diasLi = document.querySelectorAll(".day");
diasLi[25].className = "day holiday";
diasLi[26].className = "day holiday friday";
diasLi[32].className = "day holiday";
diasLi[5].className = "day friday";
diasLi[12].className = "day friday";
diasLi[19].className = "day friday";

document.getElementsByClassName("buttons-container")[0].appendChild(document.createElement("button")).id = "btn-holiday";
document.getElementById("btn-holiday").innerHTML = "Feriados";

let holidays1 = document.getElementsByClassName("holiday")[0];
let holidays2 = document.getElementsByClassName("holiday")[1];
let holidays3 = document.getElementsByClassName("holiday")[2];

holidays1.addEventListener("click", alteraCor);
holidays2.addEventListener("click", alteraCor2);
holidays3.addEventListener("click", alteraCor3);

function alteraCor() {
    holidays1.style.backgroundColor = "red";
}
function alteraCor2() {
    holidays2.style.backgroundColor = "red";
}
function alteraCor3() {
    holidays3.style.backgroundColor = "red";
}

document.getElementsByClassName("buttons-container")[0].appendChild(document.createElement("button")).id = "btn-friday";
document.getElementById("btn-friday").innerHTML = "Sexta-feira";
let fridayButton = document.getElementById("btn-friday");

let fridays1 = document.getElementsByClassName("friday")[0];
let fridays2 = document.getElementsByClassName("friday")[1];
let fridays3 = document.getElementsByClassName("friday")[2];
let fridays4 = document.getElementsByClassName("friday")[3];

fridayButton.addEventListener("click", changeFridayText);

function changeFridayText(event) {
    fridays1.innerHTML = "SEXTOU!";
    fridays2.innerHTML = "SEXTOU!";
    fridays3.innerHTML = "SEXTOU!";
    fridays4.innerHTML = "SEXTOU!";
}


// fridays1.addEventListener("click", ChangeFridayText);
// fridays2.addEventListener("click", ChangeFridayText2);
// fridays3.addEventListener("click", ChangeFridayText3);
// fridays4.addEventListener("click", ChangeFridayText4);

// function ChangeFridayText() {
//     fridays1.innerHTML = "SEXTOU PIA!";
// }
// function ChangeFridayText2() {
//     fridays2.innerHTML = "SEXTOU PIA!";
// }
// function ChangeFridayText3() {
//     fridays3.innerHTML = "SEXTOU PIA!";
// }
// function ChangeFridayText4() {
//     fridays4.innerHTML = "SEXTOU PIA!";
// }