const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const cardsContainer = document.getElementById('cards');

// Function to set grid view
function setGridView() {
    cardsContainer.classList.remove('list');
    cardsContainer.classList.add('grid');
}

// Function to set list view
function setListView() {
    cardsContainer.classList.remove('grid');
    cardsContainer.classList.add('list');
}

// Initial view (set to grid by default)
setGridView();

// Add click event listeners to buttons
gridButton.addEventListener('click', setGridView);
listButton.addEventListener('click', setListView);