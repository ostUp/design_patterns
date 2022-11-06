import { Employee } from './employee.entity';
import { Project } from './project.abstract-entity';

export class Web implements Project {
  title: string;
  start_date: string;
  task_list: string[];
  developers: Employee[];
  limit: number;
  taskList: number[];
  unique_attribut_1: number;
  constructor(
    title: string,
    start_date: string,
    task_list: string[],
    developers: Employee[],
    limit: number,
    taskList: number[],
  ) {
    this.title = title;
    this.start_date = start_date;
    this.task_list = task_list;
    this.developers = developers;
    this.limit = limit;
    this.taskList = taskList;
    this.unique_attribut_1 = 1;
  }
  public add_developer(developer: Employee) {
    this.developers.push(developer);
  }
  public remove_developer(developer: Employee) {
    this.developers = this.developers.filter((currentDeveloper) => {
      return currentDeveloper !== developer;
    });
  }
}
