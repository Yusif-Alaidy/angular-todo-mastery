import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '../../../services/task';
import { ITasks } from '../../../interfaces/i-tasks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  apiTasks = inject(Task)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const completedParam = params.get('completed'); // 'true' / 'false' / null
      const priorityParam = params.get('priority')

      if(completedParam !== null){
        this.apiTasks.loadTasks(completedParam === 'true')
      }
      else if(priorityParam !== null){
        this.apiTasks.loadTasks(undefined,priorityParam)
      }
      else{
        this.apiTasks.loadTasks()
      }
    })
  }
  
  allTasks(){
    // this.apiTasks.loadTasks()
    this.router.navigate([''])

  }

  notComplete(){
    // this.apiTasks.loadTasks(false)
    this.router.navigate([''], {queryParams:{completed:true}})
  }
  complete(){
    // this.apiTasks.loadTasks(true)
    this.router.navigate([''], {queryParams:{completed:false}})
  }
  highPriority(){
    // this.apiTasks.loadTasks(undefined,"high")
    this.router.navigate([''], {queryParams:{priority:"high"}})
  }

}
