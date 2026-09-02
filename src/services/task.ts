import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ITasks } from '../interfaces/i-tasks';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private httpClient = inject(HttpClient)
  tasks = signal<ITasks[]>([]);
  loadTasks(){
    this.httpClient.get<ITasks[]>(`${environment.baseUrl}/tasks`).subscribe({
      next:(res)  => (this.tasks.set(res)),
      error:(err) => console.log('error loading tasks',err)
    })
  }

}
