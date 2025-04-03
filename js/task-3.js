const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const findInput = nameInput.value.trim();

    if (findInput === ''){
        nameOutput.textContent = 'Anonymous'
    } else {
        nameOutput.textContent = findInput;
    }
});

console.log(nameInput);