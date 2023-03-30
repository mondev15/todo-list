import { TaskI } from './task-i';

export class Task implements TaskI {
  id!: number;
  title = 'new Task';
  completed = false;
  description = 'new description';

  constructor(obj?: Partial<Task>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
