import { Friend } from '@models/friend.model';
import { User } from "@models/user.model";
import { Game } from '@models/game.model';

export class DataService {

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  getGamesData() {
    return JSON.parse(localStorage.getItem('games')!);
  }

  getFriendsData() {
    return JSON.parse(localStorage.getItem('friends')!);
  }

  saveUserData(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  saveGamesData(games: Game[]) {
    localStorage.setItem('games', JSON.stringify(games));
  }

  saveFriendsData(friends: Friend[]) {
    localStorage.setItem('friends', JSON.stringify(friends));
  }
}