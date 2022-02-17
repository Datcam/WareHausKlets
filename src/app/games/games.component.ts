import { Component, OnInit } from '@angular/core';
import { GAMES } from './../mock-data';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  tags: string[] = [];
  data: Game[] = GAMES;

  ngOnInit(): void {
    
  }
}
