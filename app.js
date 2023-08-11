const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const button = document.querySelector('#button');

function addTask() {
    if (inputBox.value === '') {
        alert('Enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        li.tabIndex = 0;
        span.tabIndex = 0;
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        button.click();
    }
})

listContainer.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'LI' && e.key === 'Enter') {
        e.target.click();
    }
});

listContainer.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'SPAN' && e.key === 'Enter') {
        e.target.click();
    }
});
