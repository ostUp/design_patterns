import { PersonalInfo } from './personalInfo.entity';
import { ProjectManager } from './projectManager.entyti';
import { Assignment } from './assignment.entity';
export class Employee extends PersonalInfo {
  calculateSalary() {
    console.log(this.salary);
  }
  askSickLeave(projectManager: ProjectManager, assignment: Assignment) {
    if (projectManager.discuss_progress(assignment)) {
      return true;
    } else {
      return false;
    }
  }
}
