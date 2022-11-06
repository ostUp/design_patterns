enum Status {
  ISDONE = 'is_done',
  INPROGRESS = 'in_progress',
}

export class Task {
  id: number;
  title: string;
  deadline: Date;
  items: string[];
  status: Status;
  related_project: string;
  comments: string[];
  constructor(
    id: number,
    title: string,
    deadline: Date,
    items: string[],
    status: Status = Status.INPROGRESS,
    related_project: string,
    comments: string[] = [],
  ) {
    this.id = id;
    this.title = title;
    this.deadline = deadline;
    this.items = items;
    this.status = status;
    this.related_project = related_project;
    this.comments = comments;
  }
  implement_item(item_name: string): string {
    return item_name;
  }
  add_comment(comment: string): void {
    this.comments.push(comment);
  }
}
