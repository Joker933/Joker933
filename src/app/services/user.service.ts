import { Injectable } from '@angular/core';
import {UserModel} from '../models/User.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getStranka(page: number){
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    return this.http.get<UserModel>('http://85.160.64.233:3000/users/?page=' + page, {headers});
  }

  getUzivatelID(id: number){
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);
    return this.http.get<UserModel>('http://85.160.64.233:3000/user/' + id, {headers});
  }

  haloooooo() {
    const headers = new HttpHeaders().set('User-Token', AuthenticationService.token.access_token);
    return this.http.get<UserModel>('http://85.160.64.233:3000/users', {headers});
  }
}
