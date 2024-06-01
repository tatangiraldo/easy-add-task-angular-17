import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  taskList: string[] = []
  newTask?: string

  private _service = inject(TasksService)

  ngOnInit(): void {
    this.taskList = this._service.getTasks()
    debugger
  }

  addTask(){
    debugger
    this._service.addTask( this.newTask || '')
    this.newTask = ''
    this.taskList = this._service.getTasks()
  }

  removeTask(index: number){
    debugger
    this._service.deleteTask(index)   
    this.taskList = this._service.getTasks()
  }
  
}
