import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  constructor(
    private route: ActivatedRoute,
    private taskListService: TaskListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getTaskById(params['id']));
  }

  getTaskById(id: number) {
    this.taskListService
      .getTaskById(id)
      .subscribe((data: Task) => (this.task = data));
  }
}
