import { Component, OnInit } from '@angular/core';
import { GAMES } from './../mock-data';
import { Game } from '../models/game.model';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  tags: string[] = [];
  maxPrice = 0;
  minPrice = 0;
  data: Game[] = GAMES;
  filteredData: Game[] = [];
  priceLimit = 0;
  filterTags: string[] = [];
  searchValue = '';
  isAuth!: boolean;
  userGames!: Game[];

  constructor(private auth: AuthService) { }
  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth() //if true - button will work
    if (this.isAuth) {
      this.userGames = this.auth.getCurrentUser().games
    }
  }

  ngOnInit(): void {
    this.setFilteredData(this.data);
    this.mapTags();
    this.setMaxPrice();
    this.setMinPrice();
  }

  mapTags(): void {
    this.tags = [...new Set(this.data.map((game) => game.genre))];
  }

  setMaxPrice(): void {
    this.maxPrice = Math.max(...this.data.map((game) => game.price));
  }

  setMinPrice(): void {
    this.minPrice = Math.min(...this.data.map((game) => game.price));
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

    let games = this.data;
    if (this.searchValue) {
      games = this.search(games);
    }

    const filteredGames = this.filter(games);
    this.setFilteredData(filteredGames);
  }

  searchGames(event: any) {
    event.preventDefault();

    this.searchValue = event.target.search.value.trim().toLowerCase();

    let games = this.data;
    if (this.priceLimit || this.filterTags.length) {
      games = this.filter(games);
    }

    const foundGames = this.search(games);
    this.setFilteredData(foundGames);
  }

  search(games: Game[]) {
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
    this.userGames.push(addedGame)

    this.data.map((game, idx, arr) => {
      if (game.id === addedGame.id) {
        arr.splice(idx, 1)
      }
    })
  }
}
