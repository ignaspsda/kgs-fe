import {ModeEnum} from "../enum/ModeEnum";
import {Team} from "./Team";

export interface Tournament {
  id: number;
  title: string;
  mode: ModeEnum;
  tournamentStartDate: Date;
  numberOfTeams: number;
  entryCost: number;
  teamList?: Team[];
}
