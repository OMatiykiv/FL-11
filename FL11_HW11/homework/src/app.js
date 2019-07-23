let rootNode = document.getElementById('root');

const enterCode = 13;
let counter = 0;
const maxList = 10;

let showWarning = document.querySelector('.showWarning');
let inputField = document.querySelector('.inputField');
let btnAdd = document.querySelector('.btnAdd');
let todoList = document.querySelector('.todoList');

inputField.oninput = () => {
    btnAdd.disabled = !inputField.value;
}

inputField.onkeydown = e => {
    if(e.which === enterCode && inputField.value) {
        createNewTask(inputField.value);
    }
}

btnAdd.onclick = () => createNewTask(inputField.value);

let createNewTask = (textValue) => {
    let li = document.createElement('li');
    li.setAttribute('class', 'listItem');
    li.setAttribute('draggable', true)

    let currentItem = document.createElement('div');
    currentItem.setAttribute('class', 'currentItem'); 
    currentItem.setAttribute('draggable', true);
    
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(textValue));

    let checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'material-icons');
    checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));

    let changeIcon = document.createElement('i');
    changeIcon.setAttribute('class', 'material-icons');
    changeIcon.appendChild(document.createTextNode('create'));

    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.appendChild(document.createTextNode('delete'));

    let checkButton = document.createElement('button');
    checkButton.setAttribute('class', 'todo-list_checkbox');

    let changeButton = document.createElement('button');
    changeButton.setAttribute('class', 'btnChange');

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btnRemove');

    let changeItem = document.createElement('div');
    changeItem.setAttribute('class', 'changeItem');

    let changeField = document.createElement('input');

    let saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'btnSave');

    let saveIcon = document.createElement('i'); 
    saveIcon.setAttribute('class', 'material-icons');
    saveIcon.appendChild(document.createTextNode('save'));

    todoList.appendChild(li);
    li.appendChild(currentItem);
    li.appendChild(changeItem);
    currentItem.appendChild(checkButton);
    currentItem.appendChild(p);
    currentItem.appendChild(changeButton);
    currentItem.appendChild(deleteButton);
    changeItem.appendChild(changeField);
    changeItem.appendChild(saveButton);
    changeItem.appendChild(changeField);
    changeItem.appendChild(saveButton);
    checkButton.appendChild(checkIcon);
    changeButton.appendChild(changeIcon);
    deleteButton.appendChild(deleteIcon);
    saveButton.appendChild(saveIcon);
    
    counter++; 

    if (counter === maxList) {
        showWarning.style.visibility = 'visible'
        inputField.disabled = true;
        btnAdd.disabled = true;
    }

    checkIcon.onclick = () => {
        checkIcon.innerHTML = 'check_box';
    }

    changeButton.onclick = () => {
        currentItem.style.display = 'none';
        changeItem.style.display = 'flex';
        changeField.value = p.innerHTML;
    }

    let saveChanges = () => {
        currentItem.style.display = 'flex';
        changeItem.style.display = 'none';
        p.innerHTML = changeField.value;
    }

    changeField.oninput = () => {
        saveButton.disabled = !changeField.value;
    }
    
    changeField.onkeydown = e => {
        if(e.which === enterCode && changeField.value) {
            saveChanges();
        }
    }

    saveButton.onclick = () => saveChanges();

    deleteButton.onclick = () => {
        li.remove();
        counter--;
        inputField.disabled = false;
        showWarning.style.visibility = 'hidden';
    }

    inputField.value = '';
    btnAdd.disabled = true;
}
let dragging;

todoList.addEventListener('dragstart', function(event) {
    dragging = event.target;
}, false);

todoList.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

todoList.addEventListener('drop', function(event) { 
    event.preventDefault();
    if (event.target.className === 'currentItem') {
        todoList.insertBefore(dragging, event.target.parentNode);
    }
}, false);