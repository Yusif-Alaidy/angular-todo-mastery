import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../services/task';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  private fb = inject(FormBuilder);
  private taskService = inject(Task)
  private router = inject(Router)
  addTaskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    priority: ['medium', Validators.required]
  });

  onSubmit() {
    if (this.addTaskForm.invalid) {
      this.addTaskForm.markAllAsTouched();
      return;
    }
    // console.log(this.addTaskForm.value);

    const formValue = this.addTaskForm.getRawValue();
    const newTask = {
      ...formValue,
      priority: formValue.priority as 'low' | 'medium' | 'high',
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    this.taskService.addTask(newTask);
    this.router.navigate(['/']);
  }
}
