import { SoftwateArchitect } from './softwareArchitect.abstract-entity';
import { Embedded } from './embedded.entity';

export class EmbeddedArchitect extends SoftwateArchitect {
  public create_project({ ...args }): Embedded {
    return new Embedded(
      args.title,
      args.start_date,
      args.task_list,
      args.developers,
      args.limit,
      args.taskList,
    );
  }
}
