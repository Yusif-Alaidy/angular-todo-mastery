import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from "./components/task-list/task-list";
import { AddTask } from './components/add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-todo-mastery');
}
