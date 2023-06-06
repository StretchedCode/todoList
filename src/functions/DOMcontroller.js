// The interface module handles all of the DOM manipulation within the application

import icon from '../assets/close.png';
import editIcon from '../assets/menu-button-of-three-horizontal-lines.png';

class DOMcontroller {
  constructor() {
    this.body = document.createElement('div');
    this.body.classList.add('body');

    this.taskBar = document.createElement('div');
    this.taskBar.classList.add('taskbar');

    this.taskBarHeader = document.createElement('div');
    this.taskBarHeader.classList.add('taskbar-header');
    this.taskBarHeader.textContent = 'Things to Do.';

    this.taskBarContent = document.createElement('div');
    this.taskBarContent.classList.add('taskbar-content');

    this.createProjectBtn = document.createElement('button');
    this.createProjectBtn.id = 'add-project';
    this.createProjectBtn.textContent = '+';

    this.dashBoard = document.createElement('div');
    this.dashBoard.classList.add('dashboard');

    this.dashBoardTitle = document.createElement('div');
    this.dashBoardTitle.classList.add('dashboard-title');

    this.dashBoardBody = document.createElement('div');
    this.dashBoardBody.classList.add('dashboard-body');

    this.createTaskBtnContainer = document.createElement('div');
    this.createTaskBtnContainer.classList.add('task');

    this.createTaskBtn = document.createElement('button');
    this.createTaskBtn.textContent = '+';
    this.createTaskBtn.classList.add('add-task-button');
  }

  // function that prepares application for initial load
  defaultLoad() {
    this.taskBar.appendChild(this.taskBarHeader);
    this.taskBar.appendChild(this.taskBarContent);
    this.taskBarContent.appendChild(this.createProjectBtn);

    this.createTaskBtnContainer.appendChild(this.createTaskBtn);

    this.dashBoard.appendChild(this.dashBoardTitle);
    this.dashBoard.appendChild(this.dashBoardBody);
    this.dashBoardBody.appendChild(this.createTaskBtnContainer);

    this.body.appendChild(this.taskBar);
    this.body.appendChild(this.dashBoard);

    document.body.appendChild(this.body);
  }

  getProjectBtn() {
    return this.createProjectBtn;
  }

  getTaskBtn() {
    return this.createTaskBtn;
  }

  getfocusProject() {
    return this.focusProject;
  }

  setfocusProject(project) {
    this.focusProject = project;
    console.log(this.focusProject);
    this.displayProject(project);
  }

  createProjectDOM(project) {
    const newProjDOM = document.createElement('button');
    newProjDOM.textContent = project.getName();
    this.taskBarContent.appendChild(newProjDOM);
    project.setLoaded();
    newProjDOM.addEventListener('click', () => { this.setfocusProject(project); });
    return newProjDOM;
  }

  createTodoDOM(task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    const checkBoxSection = document.createElement('div');
    checkBoxSection.classList.add('check-box-sect');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    const textBoxSection = document.createElement('div');
    textBoxSection.classList.add('task-text-sect');
    textBoxSection.textContent = task.getTitle();

    const dueDateSection = document.createElement('div');
    dueDateSection.classList.add('due-date-sect');

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');

    const editSection = document.createElement('div');
    editSection.classList.add('edit-sect');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');

    const delBtn = document.createElement('button');
    delBtn.classList.add('cancel-button');

    editSection.appendChild(editBtn);
    editSection.appendChild(delBtn);

    checkBoxSection.appendChild(checkBox);
    dueDateSection.appendChild(dueDate);

    taskContainer.appendChild(checkBoxSection);
    taskContainer.appendChild(textBoxSection);
    taskContainer.appendChild(dueDateSection);
    taskContainer.appendChild(editSection);

    this.dashBoardBody.appendChild(taskContainer);
  }

  displayProject() {
    // add css-styling to indicate that project has been selected
    console.log('domController');
    // functionality

    this.dashBoardTitle.textContent = this.focusProject.getName();
    this.dashBoardBody.innerHTML = '';
    this.dashBoardBody.appendChild((this.createTaskBtnContainer));

    const projTasks = this.focusProject.getTasks();

    projTasks.forEach((task) => {
      this.createTodoDOM(task);
    });
  }
}

export default DOMcontroller;
