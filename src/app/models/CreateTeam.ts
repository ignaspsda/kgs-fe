import {Tournament} from "./Tournament.";
import {Player} from "./Player";

export interface CreateTeam {
  id?: number;
  name: string;
  tournamentList?: Tournament[];
  players: Player[];
}
