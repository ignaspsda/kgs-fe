import {Component, OnInit} from '@angular/core';
import {Team} from "../models/Team";
import {TeamService} from "../services/team.service";
import {TournamentService} from "../services/tournament.service";
import {Tournament} from "../models/Tournament.";
import {ModeEnum} from "../enum/ModeEnum";

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  tournament: Tournament = {id: 0, title: '', tournamentStartDate: new Date(), entryCost: 0, mode: ModeEnum.MODE_SOLOS, numberOfTeams: 0};

  selectedTeam: Team = {id: 0, name: ''};

  teamAlreadyRegistered: boolean = false;

  teams: Team[] = [];

  errorMessage: string = '';

  constructor(private teamService: TeamService, private tournamentService: TournamentService) { }

  ngOnInit(): void {
    // TODO make to subscribe only tournamentID
    this.tournamentService.tournament.subscribe((tournament) => this.tournament = tournament);
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

  selectTeam(team: Team): void {
    this.selectedTeam = {id: team.id, name: team.name};
  }

  addTeamToTournament(): void {

    console.log(JSON.stringify(this.selectedTeam));
    this.teamService.addTeamToTournament(this.selectedTeam, this.tournament.id).subscribe(
      () => {},
      error => {
        this.errorMessage = error.error.message;
        this.teamAlreadyRegistered = true;
      }
    );
  }

  onCreateRegisterTeam(): void {
    this.tournamentService.tournament.next(this.tournament);
  }

  close(): void {
    this.errorMessage = '';
    this.teamAlreadyRegistered = false;
    this.selectedTeam = {id: 0, name: '', playersList: []};
  }
}
