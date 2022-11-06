import { Employee } from './employee.entity';
import { Project } from './project.entity';

export class AssignManagent {
  employee: Employee;
  project: Project;
  constructor(employee, project) {
    this.employee = employee;
    this.project = project;
  }
  assign(): void {
    this.project.add_developer(this.employee);
  }

  unassign(): void {
    this.project.remove_developer(this.employee);
  }
}
