import DOMcontroller from './functions/DOMcontroller';
import Project from './functions/projects';
import './stylesheets/stylesheet.css';

const UIController = new DOMcontroller();
const projects = [];

UIController.defaultLoad();

const makeProject = UIController.getProjectBtn();
makeProject.addEventListener('click', () => {
  const projName = prompt('Please enter the name of your project.');
  const proj = new Project(projName);
  projects.push(proj);
  UIController.createProjectDOM(projName);
});
