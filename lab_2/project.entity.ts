import { Employee } from './employee.entity';
export class Project {
  title: string;
  start_date: string;
  task_list: string[];
  developers: Employee[];
  limit: number;
  taskList: number[];

  constructor(
    title: string,
    sart_date: string,
    task_list: string[],
    developers: Employee[],
    limit: number,
    taskList: number[],
  ) {
    this.title = title;
    this.start_date = sart_date;
    this.task_list = task_list;
    this.developers = developers;
    this.limit = limit;
    this.taskList = taskList;
  }

  add_developer(developer: Employee): void {
    this.developers.push(developer);
  }

  remove_developer(developer: Employee): void {
    this.developers = this.developers.filter((currentDeveloper) => {
      return currentDeveloper !== developer;
    });
  }
  get_specific_employees(typed: any): any {
    let filter: Employee[] = [];
    this.developers.forEach((worker) => {
      if (typeof worker == typed) {
        filter.push(worker);
      }
    });
  }
}
