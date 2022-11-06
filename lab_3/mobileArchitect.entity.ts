import { SoftwateArchitect } from './softwareArchitect.abstract-entity';
import { Mobile } from './mobile.entity';

export class MobileArchitect extends SoftwateArchitect {
  public create_project({ ...args }): Mobile {
    return new Mobile(
      args.title,
      args.start_date,
      args.task_list,
      args.developers,
      args.limit,
      args.taskList,
    );
  }
}
