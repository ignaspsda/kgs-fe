import {Tournament} from "./Tournament.";
import {Player} from "./Player";

export interface Team {
  id: number;
  name: string;
  tournamentList?: Tournament[];
  playersList?: Player[];
}
