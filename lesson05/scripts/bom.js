const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const clearButton = document.querySelector('#clear');

button.addEventListener('click', () => {
  const chapter = input.value.trim();
  if (chapter !== '') {
    // Check for duplicates
    const existingChapters = Array.from(list.querySelectorAll('li')).map(li => li.firstChild.textContent);
    if (existingChapters.includes(chapter)) {
      error.textContent = 'Chapter already added!';
    } else {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
      li.textContent = chapter;
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      li.append(deleteButton);
      list.append(li);
      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
      });
      saveChapters();
      input.value = '';
      error.textContent = ''; // Clear error message
    }
  } else {
    error.textContent = 'Please enter a chapter!';
  }
});

// Function to clear all chapters
clearButton.addEventListener('click', () => {
  list.innerHTML = '';
  input.focus();
  error.textContent = ''; // Clear error message
});