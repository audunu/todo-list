const displayTasks = () => {
    const container = document.querySelector('#content')
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('task-container');
    container.appendChild(rightDiv);
    return {
        rightDiv
    }
}

const displayTaskButton = () => {
    const taskBtn = document.createElement('button');
    taskBtn.innerText = 'Add Task';
    taskBtn.classList.add('taskBtn');
    taskBtn.addEventListener('click', displayTaskForm());
    displayTasks.rightDiv.appendChild(taskBtn);
}

const displayTaskForm = () => {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const dateInput = document.createElement('input');
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save'
    const cancelBtn = document.createElement('cancel');
    cancelBtn.innerText = 'Cancel'
    form.appendChild(titleInput);
    form.appendChild(dateInput);
    form.appendChild(saveBtn);
    form.appendChild(cancelBtn);
    displayTasks.rightDiv.appendChild(form);
}




export { displayTasks, displayTaskButton }