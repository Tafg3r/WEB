export function fieldEnteredData() {
    const form = getForm()
    form.querySelectorAll("input, textarea").forEach((element) => {
        if (element.name && localStorage.getItem(element.name)) {
            element.value = localStorage.getItem(element.name);
        }
    });
}

export function updateDisplay() {
    document.getElementById("displayName").textContent = document.getElementById("name").value;
    document.getElementById("displayEmail").textContent = document.getElementById("email").value;
    document.getElementById("displayMessage").textContent = document.getElementById("message").value;

    if (formEnabled() === true) {
        fieldEnteredData()
    }
}

export function inputHandlerFunc(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    form.querySelectorAll("input, textarea").forEach((element) => {
        if (element.name) {
            localStorage.setItem(element.name, element.value);
        }
    });

    alert("Form data saved successfully.");
    updateDisplay();
}

function getForm() {
    return document.getElementById("contactForm");
}

export function formEnabled() {
    return document.getElementById("contactForm") !== null
}