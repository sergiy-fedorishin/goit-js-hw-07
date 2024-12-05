const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  const name = nameInput.value.trim(); // Видалення пробілів з обох боків
  if (name) {
    nameOutput.textContent = `Hello, ${name}!`;
  } else {
    nameOutput.textContent = 'Hello, Anonymous!';
  }
});
