import { HttpInterceptorFn } from '@angular/common/http';

export const logingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url, req.method)
  return next(req);
};
