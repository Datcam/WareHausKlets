import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from '../../services/notification.service';
import { Game } from '../../shared/models/game.model';
import { User } from 'src/app/shared/models/user.model';
import { GAMES } from './../../shared/mock-data';
import { Message } from 'src/app/shared/enum-data';

@Component({
  selector: 'app-games-app',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css'],
})
export class GamesPageComponent implements OnInit, DoCheck {
  tags: string[] = [];
  maxPrice = 0;
  minPrice = 0;
  currentPrice = 0;
  games: Game[] = this.data.getGamesData() || GAMES;
  filteredData: Game[] = [];
  priceLimit = 0;
  filterTags: string[] = [];
  searchValue = '';
  isAuth!: boolean;
  userGames!: Game[];
  currentUser: User = this.data.getCurrentUser();
  message = Message;

  constructor(private auth: AuthService, private notification: NotificationService, private data: DataService) { }
  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth();
    if (this.isAuth) {
      this.userGames = this.currentUser.games;
    }
  }

  ngOnInit(): void {
    this.setFilteredData(this.games);
    this.mapTags();
    this.setMaxPrice();
    this.setMinPrice();
  }

  mapTags(): void {
    this.tags = [...new Set(this.games.map((game) => game.genre))];
  }

  setMaxPrice(): void {
    this.maxPrice = Math.max(...this.games.map((game) => game.price));
  }

  setMinPrice(): void {
    this.minPrice = Math.min(...this.games.map((game) => game.price));
  }

  setCurrentPrice(event: any): void {
    this.currentPrice = Number(event.target.value);
  }

  setFilteredData(filteredData: Game[]) {
    this.filteredData = filteredData;
  }

  filterGames(event: any) {
    event.preventDefault();

    this.priceLimit = Number(event.target.price.value);

    this.filterTags = Array.from(event.target.tag)
      .filter((input: any) => input.checked)
      .map((input: any) => input.value);

    let games = this.games;
    if (this.searchValue) {
      games = this.search(games);
    }

    const filteredGames = this.filter(games);
    this.setFilteredData(filteredGames);
  }

  searchGames(event: any) {
    event.preventDefault();

    this.searchValue = event.target.search.value.trim().toLowerCase();

    let games = this.games;
    if (this.priceLimit || this.filterTags.length) {
      games = this.filter(games);
    }

    const foundGames = this.search(games);
    this.setFilteredData(foundGames);
  }

  search(games: Game[]) {
    if (!this.searchValue) {
      return [];
    }
    return games.filter((game) => game.name.toLowerCase().includes(this.searchValue));
  }

  filter(games: Game[]) {
    return games.filter((game) => {
      return (
        game.price <= this.priceLimit &&
        (this.filterTags.length ? this.filterTags.includes(game.genre) : true)
      );
    });
  }

  addToLibrary(addedGame: Game) {
    this.userGames.push(addedGame);

    this.games.map((game, idx, arr) => {
      if (game.id === addedGame.id) {
        arr.splice(idx, 1);
      }
    });

    this.filteredData.map((game, idx, arr) => {
      if (game.id === addedGame.id) {
        arr.splice(idx, 1);
      }
    });

    this.data.saveUserData(this.currentUser);
    this.data.saveGamesData(this.games);
    this.notification.showMessage(this.message.ADD_GAME);
  }
}
