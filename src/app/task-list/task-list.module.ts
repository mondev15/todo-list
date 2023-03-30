import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [TaskListComponent, TaskDetailsComponent],
  imports: [CommonModule],
})
export class TaskListModule {}
