import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  userGames: Game[] = this.auth.getCurrentUser().games;

  constructor(private auth: AuthService, private notification: NotificationService) { }

  ngOnInit(): void {
  }

  download() {
    this.notification.showMessage('Download successfully started!')
  }

  share() {
    this.notification.showMessage('You successfully shared the game!')
  }

}
