import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../../services/task';
import { ITasks } from '../../../interfaces/i-tasks';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask implements OnInit{

  // explain the reactive form ===================================
  private fb = inject(FormBuilder)
  editTaskForm = this.fb.nonNullable.group({
    title:["",[Validators.required,Validators.minLength(3)]],
    description:[""],
    // priority: this.fb.nonNullable.control<'low' | 'medium' | 'high'>('medium')
    priority: ['medium', Validators.required]
  })

  // get task's id
  private route = inject(ActivatedRoute)
  taskId:string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.taskId = param.get('id')
      // load data from task
      this.loadTaskData()
    })
  }

  // fun load task data
  private taskService = inject(Task)
  private task:any
  loadTaskData(){
    this.task = this.taskService.tasks().find(t => t.id === this.taskId);
    if (this.task) {
       this.editTaskForm.patchValue(this.task);
    }
  }

  // onSubmit button save update data
  private router = inject(Router)
  onSubmit() {
    if (this.editTaskForm.invalid) {
      this.editTaskForm.markAllAsTouched();
      return;
    }
    // console.log(this.editTaskForm.value);

    const formValue = this.editTaskForm.getRawValue();
    const newTask = {
      ...formValue,
      priority: formValue.priority as 'low' | 'medium' | 'high',
      completed: false,
      createdAt: new Date().toISOString(),
      id:this.task.id
    };
    
    this.taskService.updateTask(newTask);
    this.router.navigate(['/']);
  }
}
