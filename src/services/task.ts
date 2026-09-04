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

  loadTasks(completed?:boolean , priority?:string){

    let url = `${environment.baseUrl}/tasks`

    if(completed !== undefined)
      url+=`?completed=${completed}`
    
    if (priority)
       url +=`?priority=${priority}`


    this.httpClient.get<ITasks[]>(url).subscribe({
      next:(res)  => (this.tasks.set(res)),
      error:(err) => console.log('error loading tasks',err)
    })

  }
}
