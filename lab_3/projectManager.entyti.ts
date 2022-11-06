import { Employee } from './employee.entity';
import { Assignment } from './assignment.entity';
enum EmployeeStatus {
  ISSICK = 'is_sick',
  ISREADY = 'is_ready',
}

export class ProjectManager extends Employee {
  employee_request: EmployeeStatus = EmployeeStatus.ISREADY;
  discuss_progress(assignment: Assignment) {
    return 'we will fill this method then, leave it blank';
  }
}
