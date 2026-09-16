import { HttpInterceptorFn } from '@angular/common/http';

export const allApiInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
