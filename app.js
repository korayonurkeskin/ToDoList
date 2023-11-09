let taskList = document.getElementsByTagName('li');

// add close button for each task
for (let i = 0; i < taskList.length; i++) {
    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    taskList[i].appendChild(span);
}