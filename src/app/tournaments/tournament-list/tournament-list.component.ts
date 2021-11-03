import { Component, OnInit } from '@angular/core';
import {Tournament} from "../../models/Tournament.";
import {TournamentService} from "../../services/tournament.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournaments().subscribe(tournaments  => this.tournaments = tournaments);
  }

}
