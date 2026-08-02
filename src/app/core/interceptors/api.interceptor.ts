import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    setHeaders: {
      'X-App-Client': 'ml-builders-web'
    }
  });
  return next(request);
};
