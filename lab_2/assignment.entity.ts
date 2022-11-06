import { Task } from './task.entity';
export class Assignment {
  received_task: Task[];
  is_done: boolean;
  description: string;
  status: string;

  constructor(received_task: Task[], is_done: boolean, description: string, status: string) {
    this.received_task = received_task;
    this.is_done = is_done;
    this.description = description;
    this.status = status;
  }

  get_tasks_by_date(date: Date): Task[] {
    let tasks: Task[] = [];
    this.received_task.forEach((task) => {
      if (task.deadline <= date) {
        tasks.push(task);
      }
    });
    return tasks;
  }
}
