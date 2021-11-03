import {Component, Input, OnInit} from '@angular/core';
import {Tournament} from "../../../models/Tournament.";
import {ModeEnum} from "../../../enum/ModeEnum";

@Component({
  selector: 'app-my-tournament',
  templateUrl: './my-tournament.component.html',
  styleUrls: ['./my-tournament.component.css']
})
export class MyTournamentComponent implements OnInit {
  @Input() tournament: Tournament = {id: 0, title: '', tournamentStartDate: new Date(), entryCost: 0, numberOfTeams: 0, mode: ModeEnum.MODE_SOLOS};

  constructor() { }

  ngOnInit(): void {
  }

}
