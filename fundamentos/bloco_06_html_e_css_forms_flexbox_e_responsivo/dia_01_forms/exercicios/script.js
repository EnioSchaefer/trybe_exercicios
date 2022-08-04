const submit = document.getElementById("submit");

submit.addEventListener("click", stopSubmit);

function stopSubmit(event) {
    event.preventDefault();
}