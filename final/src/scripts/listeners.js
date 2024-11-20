import {addTaskButton, addTodoTask, ascButton, descButton, sortNumbers, utilsEnables} from "./utils.js";
import {formEnabled, inputHandlerFunc, updateDisplay} from "./form.js";
import {addSwitchThemesButtonListeners} from "./theme-switch.js";

export function addListeners() {
    addSwitchThemesButtonListeners();
    if (formEnabled() === true) {
        document.getElementById('contactForm').addEventListener('input', updateDisplay);
        document.getElementById("contactForm").addEventListener("submit", inputHandlerFunc);
    }
    if (utilsEnables() === true) {
        ascButton.addEventListener('click', () => sortNumbers('asc'));
        descButton.addEventListener('click', () => sortNumbers('desc'));
        addTaskButton.addEventListener('click', addTodoTask)
    }
}