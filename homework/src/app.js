const rootNode = document.getElementById('root');

const mainHash = '';
const addHash = '#add';
const modifyHash = '#modify';
const todoItems = [];
const modifyPatt = /modify\/\d+/g;

let main = () => {
  document.getElementById('addItem').style.display = 'none';    
  document.getElementById('modifyItem').style.display = 'none';    
  document.getElementById('mainPage').style.display = 'flex';
  document.querySelector('.inputField').value = '';    
  location.hash = mainHash;
  if(todoItems.length) {
    document.getElementById('emptyList').style.display = 'none';
  } else{
    document.getElementById('emptyList').style.display = 'block';
  }
}

let addingPage = () => {    
  document.getElementById('modifyItem').style.display = 'none';    
  document.getElementById('mainPage').style.display = 'none';  
  document.getElementById('addItem').style.display = 'flex';
  location.hash = addHash;  
}

let modifyPage = () => {
  document.getElementById('mainPage').style.display = 'none';  
  document.getElementById('addItem').style.display = 'none';  
  document.getElementById('modifyItem').style.display = 'flex'; 
  location.hash = modifyHash + '/' + document.querySelector('.use').parentNode.id;       
}

let getItemById = e => { // need to look
  return JSON.parse(localStorage.getItem(e));
}

let changeMark = e => {
  if(e.target.parentNode.className === 'unchanged taskItem'){
    e.target.src = 'assets/img/todo-s.png';
    e.target.parentNode.setAttribute('class', 'taskItem');
    for (let i=0; i < e.target.parentNode.parentNode.childElementCount; i++) {
      let unchanged = e.target.parentNode.parentNode.childNodes[0];
      if(unchanged.className === 'unchanged taskItem') {
        e.target.parentNode.parentNode.insertBefore(e.target.parentNode, unchanged);
      }
    }
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === parseInt(e.target.parentNode.id)) {
        todoItems[i].isDone = 'false';
      }
    }
  } else {
    e.target.parentNode.parentNode.appendChild(e.target.parentNode);
    e.target.src = 'assets/img/done-s.png';
    e.target.parentNode.setAttribute('class', 'unchanged taskItem');
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === parseInt(e.target.parentNode.id)) {
        todoItems[i].isDone = 'true';
      }
    }
  }
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

let removeItem = event => {
  document.querySelector('.todoList').removeChild(event.target.parentNode);
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === parseInt(event.target.parentNode.id)) {
      todoItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

let preModifyPage = e => {
  if(e.target.parentNode.className === 'unchanged taskItem') {
    showWarning();
  } else {
  e.target.setAttribute('class', 'use');
  modifyPage();
  }
}

let transmit = task => {
  let div = document.createElement('div');
  div.setAttribute('id', task.id);
  div.setAttribute('class', 'taskItem')

  let remove = document.createElement('img');
  remove.setAttribute('class', 'remove');
  remove.setAttribute('src', 'assets/img/remove-s.jpg');
  remove.setAttribute('class', 'icons');
  remove.addEventListener('click', removeItem)

  let checkbox = document.createElement('img');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('class', 'icons');
  checkbox.addEventListener('click', changeMark)
  checkbox.setAttribute('src', 'assets/img/todo-s.png');

  let span = document.createElement('span');
  span.appendChild(document.createTextNode(task.description));
  span.addEventListener('click', preModifyPage);

  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(remove);
  document.querySelector('.todoList').appendChild(div);
} 

let save = () => {
  let inputValue = document.querySelector('input').value;
  if (!inputValue) {
    return;
  }
  if (!getItemById('counter')) {
    localStorage.setItem('counter', '1000');
  }
  let task = {
    isDone: false,
    id: getItemById('counter'),
    description: inputValue
  }
  todoItems.push(task);
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  let counter = getItemById('counter') + 1;
  localStorage.setItem('counter', counter);
  main();
  transmit(task);
}

function saveChange() {
  let inputValue = document.querySelectorAll('input')[1].value;
  if (!inputValue) {
    return;
  }
  let task = {
    isDone: false,
    id: getItemById('counter'),
    description: inputValue
  }
  todoItems.push(task);
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === parseInt(document.querySelector('.use').parentNode.id)) {
      todoItems.splice(i, 1);
    }
  }

  location.hash = mainHash;
}



window.addEventListener('load', main);
window.addEventListener('hashchange', way);
document.querySelector('.btnAdd').addEventListener('click', addingPage);
document.querySelectorAll('.btnCancel')[0].addEventListener('click', main);
document.querySelectorAll('.btnCancel')[1].addEventListener('click', main);
document.querySelectorAll('.btnSave')[0].addEventListener('click', save);
document.querySelectorAll('.btnSave')[1].addEventListener('click', saveChange);

function way() {
  let presentHash = location.hash;
  if (presentHash === addHash) { 
    addingPage() 
  } else if (modifyPatt.test(presentHash)) { 
    modifyPage() 
  }else {
    main()
  }
}

let warning = document.getElementById('warning');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.querySelector('.closeBtn');
let warningMessage = document.querySelector('.warningMessage');
const twoSeconds = 2000;

let closeWarning = () => {
    warning.style.display ='none';
}

let clickOutside = e => {
    if(e.target === warning) {
        warning.style.display = 'none';
    }
}

let showWarning = () => {
    if(navigator.userAgent.includes('Chrome')) {
        warningMessage.style.marginLeft = 0;
        warningMessage.style.marginRight = 'auto';
    }
    warning.style.display = 'block';
    setTimeout(closeWarning, twoSeconds);
}

closeBtn.addEventListener('click', closeWarning);
window.addEventListener('click', clickOutside);


