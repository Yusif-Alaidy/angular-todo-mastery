import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ITasks } from '../../interfaces/i-tasks';
import { map } from 'rxjs';

export const limitTasksGuard: CanActivateFn = (route, state) => {
  const httpClient = inject(HttpClient);

  return httpClient.get<ITasks[]>(`${environment.baseUrl}/tasks`).pipe(
    map(tasks => tasks.length <= 10)
  );
};
