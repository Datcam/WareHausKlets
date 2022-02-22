import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

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
