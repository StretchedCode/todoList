// Module that creates project objects through classes and exports it to index.js

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.loaded = false;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  setLoaded() {
    this.loaded = !(this.loaded);
  }

  getLoaded() {
    return this.loaded;
  }
}

export default Project;
