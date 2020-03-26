import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/User.model';
import {PokecService} from '../services/pokec.service';
import {PokecModel} from '../models/pokec.model';
@Component({
  selector: 'app-koment',
  templateUrl: './koment.component.html',
  styleUrls: ['./koment.component.scss']
})
export class KomentComponent implements OnInit {
  private text: string;
  private delete = false;
  private body: string;
  private hroty = [];
  private userscomments: string;
  // tslint:disable-next-line:variable-name
  private user_id: number;
  private username: string;
  private id: number;
  private user: UserModel;
  constructor(private activatedRoute: ActivatedRoute, private profile: UserService, private komentar: PokecService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( i => {
      this.profile.getUzivatelID(i.id).subscribe(user => {
      this.user = user;
      console.log(user);
      this.komentar.getPokeci(this.user.id).subscribe( ( data: PokecModel) => {
          this.hroty = data['comments'];
          console.log(this.hroty);
      });
      });
    });
  }

  posliKoment() {
    this.komentar.getPokec(this.text, this.user.id).subscribe((data: PokecModel) => {
      this.delete = true;
      this.body = data.body;
      this.user_id = data.user_id;
      this.username = data.author_id.username;
      this.id = data.id;
      console.log(data);
    });
  }
}
