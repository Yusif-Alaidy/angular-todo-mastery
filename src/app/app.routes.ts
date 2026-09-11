import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { EditTask } from './components/edit-task/edit-task';
import { TaskDetails } from './components/task-details/task-details';
import { limitTasksGuard } from './guards/limit-tasks-guard';

export const routes: Routes = [
    // {path:"",redirectTo:'/home',pathMatch:"full"},
    {path:"",component:TaskList},
    {path:"add-task",component:AddTask,canActivate:[limitTasksGuard]},
    {path:"edit-task/:id",component:EditTask},
    {path:"task/:id", component:TaskDetails}
];
