import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent, TaskDetailsComponent],
  imports: [CommonModule, TaskListRoutingModule, RouterModule],
})
export class TaskListModule {}
