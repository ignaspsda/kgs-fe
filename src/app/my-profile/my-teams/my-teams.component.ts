import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../services/team.service";
import {Team} from "../../models/Team";

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((t) => {
      this.teams = t;
    });
  }

}
