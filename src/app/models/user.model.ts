import { Game } from './game.model';
import { Friend } from './friend.model';

export interface User {
  id: number,
  email: string,
  password: string,
  userName: string,
  age: number,
  friends: Friend[],
  games: Game[]
}