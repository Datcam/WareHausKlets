import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  userGames = this.auth.getCurrentUser().games;
  visible: boolean = false;
  messageText!: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  showMessage(text: string) {
    this.messageText = text;
    this.visible = true;
    setTimeout(() => this.hideMessage(), 2000)
  }

  private hideMessage() {
    this.visible = false;
  }

}
