import { Employee } from './employee.entity';
export abstract class Project {
  public abstract add_developer(developer: Employee): void;
  public abstract remove_developer(developer: Employee): void;
}
