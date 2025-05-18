import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  taskInsert(Model) {
    debugger
    let data = {
      Id: Model.id || null,
      Title: Model.title || null,
      Description: Model.description || null,
      DueDate:  null,
      IsComplete: true,

    }
    let url = `${environment.TaskProject}api/task/InsertTask`
    return this.http.post(url, data)
  }

getAllTasks() {
  debugger
  let url = `${environment.TaskProject}api/task/GetAllTask`;
  return this.http.get<any[]>(url);
}

updateTask(Model: any) {
  let data = {
      Id: Model.id || null,
      Title: Model.title || null,
      Description: Model.description || null,
      DueDate:  null,
      IsComplete: true,

    }
  const url = `${environment.TaskProject}api/task/UpdateTask/${Model.id}`;
  return this.http.put(url, data);
}
deleteTask(id: number) {
  debugger
  const url = `${environment.TaskProject}api/task/DeleteTask/${id}`;
  return this.http.delete(url);
}
}
