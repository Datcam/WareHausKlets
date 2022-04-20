import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'request-warehouse-page',
  templateUrl: './dialog-request-warehouse.component.html',
  styleUrls: ['./dialog-request-warehouse.component.css']
})

export class DialogRequestWarehouseComponent {
  error = false;
  types = [
    {viewValue: 'Продукти', value: 1},
    {viewValue: 'Техніка', value: 2},
    {viewValue: 'Готова продукція', value: 3},
  ];
  selected = 'Продукти';

  constructor(public dialogRef: MatDialogRef<DialogRequestWarehouseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit(): void {
    if (this.data.square !== '' && this.data.type !== '' && this.data.count !== '') {
      console.log('sent: ', this.data);
      this.error = false;
      this.dialogRef.close(this.data);
    } else {
      console.log('close');
      this.error = true;
    }
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
