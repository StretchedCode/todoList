import DOMcontroller from './functions/DOMcontroller';
import Project from './functions/projects';
import Todo from './functions/todo';
import './stylesheets/stylesheet.css';

const UIController = new DOMcontroller();
const projects = [];

UIController.defaultLoad();

const makeProject = UIController.getProjectBtn();
makeProject.addEventListener('click', () => {
  const projName = prompt('Please enter the name of your project.');
  const proj = new Project(projName);
  UIController.setfocusProject(proj);
  projects.push(proj);
  loadProjects();
});
const makeTask = UIController.getTaskBtn();
makeTask.addEventListener('click', () => {
  const taskName = prompt('Please enter the name of your task');
  const task = new Todo(taskName);
  UIController.getfocusProject().addTask(task);
  UIController.displayProject();
});

function loadProjects() {
  projects.forEach((project) => {
    if (project.getLoaded() === false) {
      UIController.createProjectDOM(project);
    }
  });
}
