import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Authentication} from '../models/Authentication';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService) {}

  private url = 'http://85.160.64.233:3000/session/login';
  private email = '';
  private password = '';
  private shrek = false;

  runLog() {
    this.authentication.vratLogin(this.email, this.password).subscribe(
      (data: Authentication) => {
        this.authentication.ziskejToken(data);
        console.log(data);
        localStorage.setItem('access_token', AuthenticationService.token.access_token);
        this.router.navigate(['/logged']);
      }, (error) => {

      }
    );
  }

  ngOnInit() {

  }

}
