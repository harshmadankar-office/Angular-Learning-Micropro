import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('auth_token');

  if (token) {
    console.log('', req.url);
    const authReq = req.clone({
      setHeaders: {
        Authentication: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(req);


};
