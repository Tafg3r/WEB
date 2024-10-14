function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `Current time: ${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);

const colors = ['#1e1e2e', '#202a20', '#262617', '#2e241e'];
document.getElementById('change-bg').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[
        Math.floor(
            Math.random() * colors.length
        )];
});

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

updateTime();