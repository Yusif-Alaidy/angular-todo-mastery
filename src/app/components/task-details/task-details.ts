import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../services/task';
import { ITasks } from '../../../interfaces/i-tasks';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  private activatedRoute = inject(ActivatedRoute)
  private taskService = inject(Task)
  task=signal<ITasks|null>(null)
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  constructor() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loading.set(true);
        this.taskService.getById(id).subscribe({
          next: (res) => {
            this.task.set(res);
            this.loading.set(false);
          },
          error: (err) => {
            this.error.set('حصل خطأ في تحميل التاسك');
            this.loading.set(false);
          }
        });
      }
    });
  }
  
}
