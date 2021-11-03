import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Tournament} from "../models/Tournament.";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  tournament = new Subject<Tournament>();

  private url = environment.apiUrl + '/api/v1/tournament';

  constructor(private http: HttpClient) { }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.url);
  }

}
