import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private collection$ = new BehaviorSubject<Task[]>([]);

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public get collection(): BehaviorSubject<Task[]> {
    return this.collection$;
  }

  public set collection(col: BehaviorSubject<Task[]>) {
    this.collection$ = col;
  }

  private refreshCollection() {
    this.http
      .get<Task[]>(`${this.urlApi}/tasks`)
      .pipe(
        map((res) => {
          return res.map((obj) => new Task(obj));
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public changeState(item: Task, state: boolean): Observable<Task> {
    const obj = { ...item };
    obj.completed = state;
    return this.update(obj);
  }

  public add(item: Task): Observable<Task> {
    return this.http.post<Task>(`${this.urlApi}/tasks/`, item).pipe(
      tap((_newTask) => {
        this.refreshCollection();
      })
    );
  }

  public update(item: Task): Observable<Task> {
    return this.http.put<Task>(`${this.urlApi}/tasks/${item.id}`, item);
  }

  public getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.urlApi}/tasks/${id}`);
  }
}
