import { Game } from '@models/game.model';
import { Friend } from '@models/friend.model';

export interface User {
  name?: string,
  id: number,
  email: string,
  password: string,
  userName: string,
  age: number,
  friends: Friend[],
  games: Game[]
}
