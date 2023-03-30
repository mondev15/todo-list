import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task';
import { TaskListService } from './services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  public collection$!: Observable<Task[]>;

  constructor(private taskListService: TaskListService) {
    this.collection$ = this.taskListService.collection;
  }

  ngOnInit(): void {}

  public changeState(e: any, item: Task): void {
    e.stopPropagation();

    const state = e.target.checked;
    this.taskListService.changeState(item, state).subscribe((res) => {
      Object.assign(item, res);
    });
  }
  public addTask(): void {
    this.taskListService.add(new Task()).subscribe((_res) => {});
  }
}
