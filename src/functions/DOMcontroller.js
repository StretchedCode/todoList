// The interface module handles all of the DOM manipulation within the application

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

  createProjectDOM(projectName) {
    const newProjDOM = document.createElement('button');
    newProjDOM.textContent = projectName;
    this.taskBarContent.appendChild(newProjDOM);

    return newProjDOM;
  }

  createTodoDOM(todo) {

  }
}

export default DOMcontroller;
