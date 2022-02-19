import { Component, DoCheck, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, DoCheck {

  visible: boolean = false;
  messageText!: string;

  constructor(private notification: NotificationService) { }

  ngDoCheck(): void {
    this.visible = this.notification.visible;
    this.messageText = this.notification.messageText;
  }

  ngOnInit(): void {
  }

}