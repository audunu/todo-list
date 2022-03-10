export const displayProjects = () => {
    const container = document.querySelector('#content')
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('project-container');
    const title = document.createElement('h2');
    title.innerText = 'Projects';
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    leftDiv.appendChild(title);
    leftDiv.appendChild(spacer);
    container.appendChild(leftDiv);
}

