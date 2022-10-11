interface IEmployee {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  salary: number;
}

interface IEmployeeItDepartment extends IEmployee {
  rank: string;
}

interface Task {
  title: string;
  is_done: boolean;
  description: string;
}

type receivedTask = {
  [key: string]: Task[];
};

class Project {
  title: string;
  start_date: string;
  task_list: string[];
  developers: Developer[];
  limit: number;

  constructor(
    title: string,
    sart_date: string,
    task_list: string[],
    developers: Developer[],
    limit: number,
  ) {
    this.title = title;
    this.start_date = sart_date;
    this.task_list = task_list;
    this.developers = developers;
    this.limit = limit;
  }

  add_developer(developer: Developer): void {
    this.developers.push(developer);
  }

  remove_developer(developer: Developer): void {
    this.developers = this.developers.filter((currentDeveloper) => {
      return currentDeveloper !== developer;
    });
  }
}

class Assignment {
  received_task: receivedTask;
  is_done: boolean;
  description: string;
  status: string;

  constructor(received_task: receivedTask, is_done: boolean, description: string, status: string) {
    this.received_task = received_task;
    this.is_done = is_done;
    this.description = description;
    this.status = status;
  }

  get_tasks_by_date(date: string): Task[] {
    return this.received_task[date];
  }
}

class Developer implements IEmployeeItDepartment {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  salary: number;
  rank: string;

  position: number;
  projects: Project[];

  constructor(
    id: number,
    name: string,
    address: string,
    phone_number: string,
    email: string,
    salary: number,
    rank: string,
    position: number,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
    this.salary = salary;
    this.rank = rank;

    this.position = position;
    this.projects = new Array<Project>();
  }

  assign_possibility(project: Project): boolean {
    return project.limit <= this.position;
  }

  assigned_project(): Project[] {
    return this.projects;
  }

  assign(project: Project): void {
    this.projects.push(project);
  }

  unassign(project: Project): void {
    this.projects = this.projects.filter((currentProject) => {
      return currentProject !== project;
    });
  }
}

class QAEngineer implements IEmployeeItDepartment {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  salary: number;
  rank: string;

  position: string;

  constructor(
    id: number,
    name: string,
    address: string,
    phone_number: string,
    email: string,
    salary: number,
    rank: string,
    position: string,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
    this.salary = salary;
    this.rank = rank;

    this.position = position;
  }

  test_feature(project: Project): string {
    return `${project.title} was tested by ${this.name}`;
  }
}

class ProjectManager implements IEmployee {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  salary: number;
  rank: string;

  project: Project;

  constructor(
    id: number,
    name: string,
    address: string,
    phone_number: string,
    email: string,
    salary: number,
    rank: string,
    project: Project,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
    this.salary = salary;
    this.rank = rank;
    this.project = project;
  }
  discuss_progress(assignment: Assignment): number {
    let tasksCount = 0;
    let completedTasksCount = 0;
    Object.keys(assignment.received_task).forEach((date) => {
      assignment.received_task[date].forEach((task) => {
        tasksCount += 1;
        if (task.is_done) completedTasksCount += 1;
      });
    });
    return completedTasksCount / tasksCount;
  }
}

let answer;
const developerJohn = new Developer(
  1,
  'John',
  'testStreet',
  'phone_num',
  'John@gmail.com',
  2000,
  'Mid',
  3,
);
const developerSmith = new Developer(
  2,
  'Smith',
  'testStreet',
  'phone_num',
  'Smith@gmail.com',
  1500,
  'Jun',
  1,
);

const taskList: string[] = ['task1', 'task2', 'task3'];
const awesomeProject = new Project('AwesomeProject', '22/5/2021', taskList, [developerJohn], 2);
developerJohn.assign(awesomeProject);

const isSmithCanAssignProject = developerSmith.assign_possibility(awesomeProject);
answer = isSmithCanAssignProject
  ? 'Smith can join to the project'
  : 'Smith doesn`t have enough experience';
console.log(answer);

const developerIvan = new Developer(
  3,
  'ivan',
  'testStreet',
  'phone_num',
  'ivan@gmail.com',
  2500,
  'Mid',
  4,
);
const isIvanCanAssignProject = developerIvan.assign_possibility(awesomeProject);
answer = isIvanCanAssignProject
  ? 'Ivan can join to the project'
  : 'Ivan doesn`t have enough experience';
console.log(answer);

awesomeProject.add_developer(developerIvan);
developerIvan.assign(awesomeProject);

console.log(`John has projects: ${developerJohn.projects.length}`);
console.log(`Ivan has projects: ${developerJohn.projects.length}`);
console.log(`${awesomeProject.title} has ${awesomeProject.developers.length} developers`);

awesomeProject.remove_developer(developerJohn);
developerJohn.unassign(awesomeProject);

console.log(`John has projects: ${developerJohn.projects.length}`);
console.log(`${awesomeProject.title} has ${awesomeProject.developers.length} developers`);

const maxQA = new QAEngineer(
  4,
  'Max',
  'testStreet',
  'phone_num',
  'Max@gmail.com',
  1500,
  'rank',
  'position',
);
console.log(maxQA.test_feature(awesomeProject));

const task1: Task = { title: 'task1', is_done: true, description: 'description' };
const task2: Task = { title: 'task2', is_done: true, description: 'description' };
const task3: Task = { title: 'task3', is_done: true, description: 'description' };

const recived_Tasks: receivedTask = {
  '21/6/2022': [task1, task2],
  '22/6/2022': [task3],
};

const assignment = new Assignment(recived_Tasks, false, 'description', '...');
const tasksByDate = assignment.get_tasks_by_date('21/6/2022');
