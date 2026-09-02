import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '../../../services/task';
import { ITasks } from '../../../interfaces/i-tasks';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  apiTasks = inject(Task)
  ngOnInit(): void {
    this.apiTasks.loadTasks()
  }


}
