import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Team} from "../models/Team";
import {CreateTeam} from "../models/CreateTeam";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private url = environment.apiUrl + '/api/v1/team';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  }

  addTeamToTournament(team: Team, tournamentId: number): Observable<any> {
    return this.http.put(`${this.url}/${tournamentId}`, team).pipe();
  }

  createTeamForTournament(team: CreateTeam, tournamentId: number): Observable<any> {
    return this.http.post(`${this.url}/${tournamentId}`, team).pipe();
  }
}
