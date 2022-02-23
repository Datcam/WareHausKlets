import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from '../../services/notification.service';
import { Game } from '../../shared/models/game.model';
import { Message } from 'src/app/shared/enum-data';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent {

  userGames: Game[] = this.data.getCurrentUser().games;
  message = Message;

  constructor(private data: DataService, private notification: NotificationService) { }

  download() {
    this.notification.showMessage(this.message.START_DOWNLOAD);
  }

  share() {
    this.notification.showMessage(this.message.SHARE_GAME);
  }
}
