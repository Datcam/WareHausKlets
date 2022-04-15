import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogRequestServiceComponent } from "../dialog-request-service/dialog-request-service.component";
import {NotificationService} from "@services/notification.service";
import { Message } from '@shared/enum-data';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'main-app',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  message = Message;

  constructor(public dialog: MatDialog, public notification: NotificationService, public http: HttpClient) {
  }

  openForm(): void {
    const dialogRef = this.dialog.open(DialogRequestServiceComponent, {
      data: {name: '', phone: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }


      this.notification.showMessage(this.message.SAVE_DATA);
      this.http.post<any>('http://localhost:3000/request_new_client', { name: result.name, phone: result.phone })
        .subscribe(data => {
          console.log(data);
        })
    });
  }
}
