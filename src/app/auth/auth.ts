import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly TOKEN_KEY = 'auth_token';

  login(username: string, password: string) {
    if (username == 'admin' && password == 'admin') {

      console.log(username, password);
      let token = crypto.randomUUID();
      localStorage.setItem(this.TOKEN_KEY, token);
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLogin() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}
