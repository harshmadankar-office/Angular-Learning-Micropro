import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {

  handleError(http: HttpErrorResponse): void {
    console.log("FOUND ERROR", http);
    alert("PLEASE TRY AGAIN !!");
  }
}
