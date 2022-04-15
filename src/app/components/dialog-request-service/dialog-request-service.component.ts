import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-friends-page',
  templateUrl: './dialog-request-service.component.html',
  styleUrls: ['./dialog-request-service.component.css']
})

export class DialogRequestServiceComponent {
  error = false;

  constructor(public dialogRef: MatDialogRef<DialogRequestServiceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit(): void {
    if (this.data.name !== '' && this.data.phone !== '') {
      this.error = false;
      this.dialogRef.close(this.data);
    } else {
      this.error = true;
    }
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
