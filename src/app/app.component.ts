import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskProject';
  TaskList: any[] = []
  TaskModel: any[] = []
  taskFlag: boolean = false
  updateFlag: boolean = false
  
  /**
   *
   */
  constructor(private taskService: TaskService) {

  }
  ngOnInit() {
    debugger
    this.getAllTask()
  }
  getAllTask() {
    debugger
    const data = this.taskService.getAllTasks().subscribe((response) => {
      if (response) {
        this.TaskList = response
      }
    })
  }
  onclose() {
    this.updateFlag = false
    this.taskFlag = false
    this.TaskModel = []
  }

  addType() {
    this.updateFlag = false
    this.taskFlag = true
    this.TaskModel = []
  }
  AddTask() {
    debugger
    const data = this.taskService.taskInsert(this.TaskModel).subscribe((response) => {
      if (response) {
        this.getAllTask()
        this.taskFlag = false
      }
    })
  }
    deleteTask(Id) {
    debugger
    const data = this.taskService.deleteTask(Id).subscribe((response) => {
      if (response) {
        this.getAllTask()
        this.taskFlag = false
      }
    })
  }
  selectById(data){
    debugger
    this.updateFlag = true
    this.taskFlag = true
    Object.assign(this.TaskModel, data);
  }
   updateTask(Id) {
    debugger
    const data = this.taskService.updateTask(this.TaskModel).subscribe((response) => {
      if (response) {
        this.getAllTask()
        this.taskFlag = false
      }
    })
  }
}
