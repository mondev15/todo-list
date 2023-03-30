import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
