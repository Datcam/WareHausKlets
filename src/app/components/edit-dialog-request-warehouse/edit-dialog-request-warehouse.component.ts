import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'edit-request-warehouse-page',
  templateUrl: './edit-dialog-request-warehouse.component.html',
  styleUrls: ['./edit-dialog-request-warehouse.component.css']
})

export class EditDialogRequestWarehouseComponent {
  error = false;
  types = [
    {viewValue: 'Продукти', value: 1},
    {viewValue: 'Техніка', value: 2},
    {viewValue: 'Готова продукція', value: 3},
  ];
  selected = 'Продукти';
  role = localStorage.getItem('currentUserRole');

  constructor(public dialogRef: MatDialogRef<EditDialogRequestWarehouseComponent>,
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

  apply(): void {
    this.dialogRef.close('apply');
  }

  discard(): void {
    this.dialogRef.close('discard');
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
