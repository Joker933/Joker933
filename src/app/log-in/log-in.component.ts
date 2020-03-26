import { Component, OnInit } from '@angular/core';
import Key from '../Key';
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

  private url = 'http://85.160.64.233:3000/session/login';
  private email = '';
  private password = '';
  private shrek = false;

  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService) {}

  runLog() {
    this.authentication.vratLogin(this.email, this.password).subscribe(
      (data: Authentication) => {

        this.authentication.ziskejToken(data);
        console.log(data);
        this.router.navigate(['/logged']);
      }, (error) => {

      }
    );
  }


  ngOnInit() {
  }

}
