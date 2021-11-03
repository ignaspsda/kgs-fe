import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../services/tournament.service";
import {Tournament} from "../../models/Tournament.";

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.css']
})
export class MyTournamentsComponent implements OnInit {
  tournaments: Tournament[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournaments().subscribe((t) => {
      this.tournaments = t;
    })
  }

}
