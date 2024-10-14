// Function to update the current time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('current-time').textContent = `Current time: ${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);

// Function to change background color randomly
const colors = ['#1e1e2e', '#202a20', '#262617', '#2e241e'];
document.getElementById('change-bg').addEventListener('click', function () {
  document.body.style.backgroundColor = colors[
    Math.floor(Math.random() * colors.length)
    ];
});

// Number sorting functionality
const numbersInput = document.getElementById('numbers-input');
const sortAscButton = document.getElementById('sort-asc');
const sortDescButton = document.getElementById('sort-desc');
const sortedOutput = document.getElementById('sorted-output');

function sortNumbers(order) {
  const numbers = numbersInput.value.split(',').map(Number);
  if (numbers.some(isNaN)) {
    alert('Please enter valid numbers');
    return;
  }
  numbers.sort((a, b) => order === 'asc' ? a - b : b - a);
  sortedOutput.textContent = 'Sorted: ' + numbers.join(', ');
}

sortAscButton.addEventListener('click', () => sortNumbers('asc'));
sortDescButton.addEventListener('click', () => sortNumbers('desc'));

// To-Do List functionality
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskButton = document.getElementById('add-task-btn');

addTaskButton.addEventListener('click', () => {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText === '') {
    alert('Task cannot be empty');
    return;
  }

  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox">
    <label>${newTaskText}</label>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(newTask);
  newTaskInput.value = '';

  // Add delete functionality
  const deleteButton = newTask.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => {
    newTask.remove();
  });
});

// Form validation for "Contact Me"
document.getElementById('contactForm').addEventListener('submit', function(event) {
  const nameField = document.getElementById('name');
  const messageField = document.getElementById('message');
  const emailField = document.getElementById('email');

  // Name field validation
  const nameValue = nameField.value.trim();
  const namePattern = /^[A-Za-zА-Яа-яёЁ\s]+$/;  // Only letters and spaces

  if (!namePattern.test(nameValue)) {
    alert('Please enter a valid name without numbers or special characters.');
    event.preventDefault();  // Prevent form submission
    return false;
  }

  // Check if the name field is not empty
  if (nameValue === "") {
    alert('Name field cannot be empty.');
    event.preventDefault();
    return false;
  }

  // Message field validation (optional)
  const messageValue = messageField.value.trim();
  if (messageValue.length < 5) {
    alert('Message should be at least 5 characters long.');
    event.preventDefault();
    return false;
  }

  // Email field validation (required)
  if (emailField.value === "") {
    alert('Email is required.');
    event.preventDefault();
    return false;
  }

  return true;
});
