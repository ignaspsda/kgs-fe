import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateTeam} from "../../models/CreateTeam";
import {TournamentService} from "../../services/tournament.service";
import {Tournament} from "../../models/Tournament.";
import {ModeEnum} from "../../enum/ModeEnum";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-create-register-team',
  templateUrl: './create-register-team.component.html',
  styleUrls: ['./create-register-team.component.css']
})
export class CreateRegisterTeamComponent implements OnInit {

  @ViewChild('closeButton') closeButton: any;
  teamForm: FormGroup;
  team: CreateTeam = {name: '', players: [{playerName: ''}]};
  maxPlayers: number = 0;
  tournamentId: number = 0;


  constructor(private formBuilder: FormBuilder, private tournamentService: TournamentService, private teamService: TeamService) {
    this.teamForm = formBuilder.group({
      teamName: formBuilder.control('', Validators.required),
      players: formBuilder.array([this.createPlayerGroup()])
    })
  }

  ngOnInit(): void {
    this.tournamentService.tournament.subscribe((tournament: Tournament) => {
      this.maxPlayers = Number(ModeEnum[tournament.mode]);
      this.tournamentId = tournament.id;
      });
  }

  createPlayerGroup(): FormGroup {
    return this.formBuilder.group({
      playerName: this.formBuilder.control('', Validators.required)
    });
  }

  playersControls(): AbstractControl[] {
    return (<FormArray>this.teamForm.get('players')).controls;
  }

  onSubmit(): void {
    this.team.name = this.teamForm.value['teamName'];
    this.team.players = this.teamForm.value['players'];

    this.teamService.createTeamForTournament(this.team, this.tournamentId).subscribe();

    this.close();
  }

  addPlayer(): void {
    (<FormArray>this.teamForm.get('players')).push(this.createPlayerGroup());
  }

  playersLimit(): boolean {
    return this.playersControls().length == this.maxPlayers;
  }

  close(): void {
    this.teamForm.reset();
    this.teamForm.setControl('players', this.formBuilder.array([this.createPlayerGroup()]));
    this.closeButton.nativeElement.click();
  }

  onDeletePlayer(index: number): void {
    (<FormArray>this.teamForm.get('players')).removeAt(index);
  }
}
