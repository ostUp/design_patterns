import { Employee } from './employee.entity';

import { Project } from './project.entity';
export class Developer extends Employee {
  projects: Project[] = new Array<Project>();

  assign_possibility(project: Project): boolean {
    return project.limit <= this.position;
  }

  assigned_project(): Project[] {
    return this.projects;
  }
}
