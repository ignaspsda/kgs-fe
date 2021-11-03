import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TournamentsComponent} from "./tournaments/tournaments.component";
import {HomeComponent} from "./home/home.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {MyTournamentsComponent} from "./my-profile/my-tournaments/my-tournaments.component";
import {MyStatsComponent} from "./my-profile/my-stats/my-stats.component";
import {AccountInformationComponent} from "./my-profile/account-information/account-information.component";
import {MyTeamsComponent} from "./my-profile/my-teams/my-teams.component";
import {RegisterUserComponent} from "./register-user/register-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-profile/my-tournaments', component: MyTournamentsComponent },
  { path: 'my-profile/my-stats', component: MyStatsComponent },
  { path: 'my-profile/account-information', component: AccountInformationComponent },
  { path: 'my-profile/my-teams', component: MyTeamsComponent },
  { path: 'register', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
