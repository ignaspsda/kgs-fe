import {Component, Input, OnInit} from '@angular/core';
import {Tournament} from "../../../models/Tournament.";
import {ModeEnum} from "../../../enum/ModeEnum";
import {TournamentService} from "../../../services/tournament.service";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  @Input() tournament: Tournament = { id: 0, title: '', tournamentStartDate: new Date(), entryCost: 0, mode: ModeEnum.MODE_SOLOS, numberOfTeams: 0 }

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void { }

  onRegisterTournament(): void {
    this.tournamentService.tournament.next(this.tournament);
  }
}
