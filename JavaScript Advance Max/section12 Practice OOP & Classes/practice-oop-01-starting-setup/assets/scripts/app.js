class DOMHelper {
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
  }
}

class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListFunction) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }
  connectMoreInfoButton() {}
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click", this.updateProjectListHandler);
  }
}
class ProjectList {
  projects = [];
  constructor(type, switchHandlerFunction) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
    console.log(this.projects);
  }
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`)
  }
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId)
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}
class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(
      finishProjectList.addProject.bind(finishProjectList)
    );
    finishProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
    console.log(activeProjectList);
    console.log(finishProjectList);
  }
}

App.init();
