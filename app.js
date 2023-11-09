let taskList = document.getElementsByTagName('li');

// add close button for each task
for (let i = 0; i < taskList.length; i++) {
    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    taskList[i].appendChild(span);
};

// add delete task functionality
const closeButtons = document.getElementsByClassName('close');
for (let btn of closeButtons) {
    btn.onclick = function() {
        this.parentElement.style.display = "none";
    };
};

// mark as complete functionality
let list = document.querySelector('ul')
list.addEventListener('click', function(e) {
    console.log(e.target.classList);
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } 
}, false);