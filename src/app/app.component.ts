import { Component, OnInit } from '@angular/core';
import Key from './Key';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MercedesSAMG';
  constructor(private router: Router) {
    if (localStorage.getItem('access_token')) {
      AuthenticationService.token.access_token = (localStorage.getItem('access_token'));
      console.log(localStorage.getItem('access_token'));

      this.router.navigate(['/info']);
    } else {
      this.router.navigate(['/info']);
    }
  }
}

