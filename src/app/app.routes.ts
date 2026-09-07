import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';

export const routes: Routes = [
    // {path:"",redirectTo:'/home',pathMatch:"full"},
    {path:"",component:TaskList},
    {path:"add-task",component:AddTask},
];
