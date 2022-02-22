import { Component } from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { NotificationService } from '../../services/notification.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent {

  userGames: Game[] = this.data.getCurrentUser().games;

  constructor(private data: DataService, private notification: NotificationService) { }

  download() {
    this.notification.showMessage('Download successfully started!');
  }

  share() {
    this.notification.showMessage('You successfully shared the game!');
  }
}
