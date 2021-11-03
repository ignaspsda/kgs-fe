import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../../models/Team";

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  @Input() team: Team = {id: 0, name: '', playersList: [{playerName: ''}]};

  constructor() { }

  ngOnInit(): void {
    console.log(this.team.playersList?.length);
  }

}
