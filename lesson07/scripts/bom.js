const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const clearButton = document.querySelector('#clear');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
})
button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});
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

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
}
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}