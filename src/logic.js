import { allProjects } from "./index"

const createProject = (name, description) => {
    allProjects.push({
        name, 
        description, 
        toDoList: [],
        active: true,
     })
}

const createToDo = (name, dueDate) => {
    activeProject().toDoList.push({
        name,
        dueDate,
        complete: false
    })
}

function getActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active);
    return activeProjectArray[0];
}