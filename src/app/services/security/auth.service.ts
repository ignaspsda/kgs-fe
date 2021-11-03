import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/User";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl + '/api/v1/auth';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.put(this.url, user, httpOptions);
  }

  register(user: User): Observable<any> {
    return this.http.post(this.url, user, httpOptions);
  }

}
