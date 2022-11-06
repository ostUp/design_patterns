import { SoftwateArchitect } from './softwareArchitect.abstract-entity';
import { Web } from './web.entity';

export class WebArchitect extends SoftwateArchitect {
  public create_project({ ...args }): Web {
    return new Web(
      args.title,
      args.start_date,
      args.task_list,
      args.developers,
      args.limit,
      args.taskList,
    );
  }
}
