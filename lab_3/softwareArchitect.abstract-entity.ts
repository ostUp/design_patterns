import { Employee } from './employee.entity';
import { Project } from './project.entity';
import { Team } from './team.entity';
export abstract class SoftwateArchitect extends Employee {
  fill_project(team: Team): void {
    console.log(team.project_id);
  }

  public abstract create_project({ ...args }): any;
}
