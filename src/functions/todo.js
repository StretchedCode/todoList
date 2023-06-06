// Module that creates the todo objects

class Todo {
  constructor(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setContainer(container) {
    this.container = container;
  }

  getContainer() {
    return this.container;
  }

  setdelBtn(button) {
    this.delBtn = button;
  }

  getdelBtn() {
    return this.delBtn;
  }
}

export default Todo;
