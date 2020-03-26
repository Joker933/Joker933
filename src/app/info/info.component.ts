import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/User.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  private username = '';
  private email = '';
  private id = '';
  private users = [];
  private url = 'http://85.160.64.233:3000/user';
  private url2 = 'http://85.160.64.233:3000/session/logout';

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient, private user: UserService, private authentication: AuthenticationService) {

    this.user.haloooooo().subscribe(
        (data: UserModel) => {
            this.users = data['users'];
        }, (error) => {

        }
      );

  }

  clickProfile(id: number) {
    this.router.navigate(['/koment'],  {queryParams: {id}});
  }

  runLogOut() {

    this.authentication
    .smazToken()
    .subscribe(
      (data: any) => {
       AuthenticationService.token.access_token = '';
       console.log(Key.access);
      }, (error) => {
      }
    );
  }


  ngOnInit() {
  }

}
