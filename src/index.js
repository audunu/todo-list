
import './style.css';
import {displayProjects} from './projects.js'
import {displayTasks, displayTaskButton} from './tasks.js'


console.log('halldso');

displayProjects();
displayTasks();
displayTaskButton();



class Todo {
    constructor(title, dueDate) {
      this.title = title;
      this.dueDate = dueDate;
    }
  }






const addTodo = (title, dueDate) => {
    const todo = new Todo()
}