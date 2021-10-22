import { Component, OnInit } from '@angular/core';
import {Tournament} from "../model/tournament.model";
import {TournamentService} from "../service/tournament.service";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournaments: Tournament[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments(): void {
    this.tournamentService.getTournaments().subscribe(t => this.tournaments = t);
  }

}
