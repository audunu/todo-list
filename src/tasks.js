const container = document.querySelector('#content')
const rightDiv = document.querySelector('.task-container');

const displayTasks = () => {
    container.appendChild(rightDiv);
}

const displayTaskButton = () => {
    const taskBtn = document.createElement('button');
    taskBtn.innerText = 'Add Task';
    taskBtn.classList.add('taskBtn');
    taskBtn.addEventListener('click', displayTaskForm());
    rightDiv.appendChild(taskBtn);
    return {
        taskBtn
    }
}

const displayTaskForm = () => {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save'
    const cancelBtn = document.createElement('cancel');
    cancelBtn.innerText = 'Cancel'
    cancelBtn.classList.add('cancelBtn')
    form.appendChild(titleInput);
    form.appendChild(dateInput);
    form.appendChild(saveBtn);
    form.appendChild(cancelBtn);
    rightDiv.appendChild(form);
    displayTaskButton.taskBtn.classList.add('.blue');
}




export { displayTasks, displayTaskButton }