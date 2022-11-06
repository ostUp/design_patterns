import { Employee } from './employee.entity';
export class Team {
  id: number;
  title: string;
  member_list: Employee[];
  project_id: number;
  constructor(id: number, title: string, project_id: number) {
    this.id = id;
    this.title = title;
    this.member_list = [];
    this.project_id = project_id;
  }
}
