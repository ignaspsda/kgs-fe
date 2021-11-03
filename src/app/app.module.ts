import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournaments/tournament-list/tournament/tournament.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterTeamComponent } from './register-team/register-team.component';
import { CreateRegisterTeamComponent } from './register-team/create-register-team/create-register-team.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyTournamentsComponent } from './my-profile/my-tournaments/my-tournaments.component';
import { AccountInformationComponent } from './my-profile/account-information/account-information.component';
import {MyStatsComponent} from "./my-profile/my-stats/my-stats.component";
import { MyTeamsComponent } from './my-profile/my-teams/my-teams.component';
import { MyTournamentComponent } from './my-profile/my-tournaments/my-tournament/my-tournament.component';
import { MyTeamComponent } from './my-profile/my-teams/my-team/my-team.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    TournamentsComponent,
    TournamentListComponent,
    RegisterTeamComponent,
    CreateRegisterTeamComponent,
    HeaderComponent,
    HomeComponent,
    MyProfileComponent,
    MyTournamentsComponent,
    AccountInformationComponent,
    MyStatsComponent,
    MyTeamsComponent,
    MyTournamentComponent,
    MyTeamComponent,
    LoginComponent,
    RegisterUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
