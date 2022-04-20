import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'delete-request-warehouse-page',
  templateUrl: './delete-dialog-request-warehouse.component.html',
  styleUrls: ['./delete-dialog-request-warehouse.component.css']
})

export class DeleteDialogRequestWarehouseComponent {
  error = false;
  types = [
    {viewValue: 'Продукти', value: 1},
    {viewValue: 'Техніка', value: 2},
    {viewValue: 'Готова продукція', value: 3},
  ];
  selected = 'Продукти';

  constructor(public dialogRef: MatDialogRef<DeleteDialogRequestWarehouseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit(): void {
    this.dialogRef.close(true);
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
