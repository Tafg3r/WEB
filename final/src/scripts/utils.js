const numbersInput = document.getElementById('numbers-input');
const sortedOutput = document.getElementById('sorted-output');
export const ascButton = document.getElementById('sort-asc');
export const descButton = document.getElementById('sort-desc');

export function sortNumbers(order) {
    let numbers = numbersInput.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers');
        return;
    }
    numbers.sort((a, b) => order === 'asc' ? a - b : b - a);
    sortedOutput.textContent = 'Sorted: ' + numbers.join(', ');
}

export function utilsEnables() {
    return ascButton !== null
}

let taskList = document.getElementById('task-list');
export const addTaskButton = document.getElementById('add-task-btn');

export function addTodoTask() {
    const newTaskText = document.getElementById('new-task-input').value.trim();
    if (newTaskText === '') {
        alert('Task cannot be empty');
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <input type="checkbox">
        <label>
            ${newTaskText}
        </label>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(newTask);
    document.getElementById('new-task-input').value = '';

    const deleteButton = newTask.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        newTask.remove();
    });
}