import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@services/notification.service';
import { DataService } from '@services/data.service';
import { User } from '@models/user.model';
import { UserObjectProperty, Message } from '@shared/enum-data';
import { HttpClient } from "@angular/common/http";
import {DialogRequestServiceComponent} from "../dialog-request-service/dialog-request-service.component";
import { MatDialog } from "@angular/material/dialog";
import {DialogRequestWarehouseComponent} from "../dialog-request-warehouse/dialog-request-warehouse.component";
import {EditDialogRequestWarehouseComponent} from "../edit-dialog-request-warehouse/edit-dialog-request-warehouse.component";
import {DeleteDialogRequestWarehouseComponent} from "../delete-dialog-request-warehouse/delete-dialog-request-warehouse.component";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})

export class ProfilePageComponent implements OnInit {

  MIN_NAME_LENGTH: number = 5;
  form!: FormGroup;
  enteredEmail!: string;
  currentUser: User = this.data.getCurrentUser();
  userProperty = UserObjectProperty;
  message = Message;
  notValid: boolean = false;
  userName: string | undefined = '';
  ELEMENT_DATA = [
    {type: 'Техніка', square: 55, count: 365, status: 'Готово'},
  ];

  displayedColumns: string[] = ['email', 'type', 'square', 'count', 'status', 'edit', 'remove'];
  dataSource = [];
  countItems = 0;
  role = localStorage.getItem('currentUserRole');

  constructor(public dialog: MatDialog, private data: DataService, private notification: NotificationService, public http: HttpClient) { }

  ngOnInit(): void {
    this.userName = this.currentUser.name;
    this.enteredEmail = this.currentUser.email;
    this.form = new FormGroup({
      name: new FormControl(this.currentUser.name || '', [Validators.required, Validators.minLength(this.MIN_NAME_LENGTH)]),
      age: new FormControl(this.currentUser.age || '', [Validators.required])
    });

    const role = localStorage.getItem('currentUserRole');

    console.log(role);
    if (role === "Administrator") {
      console.log('admin?');
      this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
        .subscribe((res) => {
          const a = JSON.stringify(res);
          const b = JSON.parse(a);
          this.dataSource = b;
        });
    } else {
      console.log('pp')
      this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
        .subscribe((res) => {
          const a = JSON.stringify(res);
          const b = JSON.parse(a);
          let currentUserId = localStorage.getItem('currentUserId');

          // @ts-ignore
          let userRequestList: any[] = [];

          b.forEach((item: any) => {
            if (item.userId === currentUserId) {
              userRequestList.push(item);
            }
          });

          // const userRequestList = b.map((item) => {
          //   if (item.userId === currentUserId) {
          //     console.log('aaa')
          //     if (item) {
          //       return item;
          //     }
          //   }
          // });


          console.log('userRequestList: ', userRequestList);
          this.countItems = userRequestList.length;
          // @ts-ignore
          this.dataSource = userRequestList;
        });
    }
  }

  edit(item: any): void {
    const dialogRef = this.dialog.open(EditDialogRequestWarehouseComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (result === 'apply') {
        this.http.patch<any>(`http://localhost:3000/request_new_warehouse_client/${item.id}`, {status: true})
          .subscribe(data => {
            this.notification.showMessage(this.message.EDIT_SENT_REQUEST);
            this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
              .subscribe((res) => {
                console.log('res: ', res)
                const a = JSON.stringify(res);
                const b = JSON.parse(a);

                this.dataSource = b;
              });
          });
      } else if (result === 'discard') {
        this.http.patch<any>(`http://localhost:3000/request_new_warehouse_client/${item.id}`, {status: false})
          .subscribe(data => {
            this.notification.showMessage(this.message.EDIT_SENT_REQUEST);
            this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
              .subscribe((res) => {
                console.log('res: ', res)
                const a = JSON.stringify(res);
                const b = JSON.parse(a);

                this.dataSource = b;
              });
          });
      } else {
        this.http.patch<any>(`http://localhost:3000/request_new_warehouse_client/${item.id}`, result)
          .subscribe(data => {
            this.notification.showMessage(this.message.EDIT_SENT_REQUEST);
            console.log(data);
          });
      }
    });
  }

  remove(item: any): void {
    const dialogRef = this.dialog.open(DeleteDialogRequestWarehouseComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.notification.showMessage(this.message.DELETE_SENT_REQUEST);
      this.http.delete<any>(`http://localhost:3000/request_new_warehouse_client/${item.id}`)
        .subscribe(data => {
          this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
            .subscribe((res) => {
              console.log('res: ', res)
              const a = JSON.stringify(res);
              const b = JSON.parse(a);
              const role = localStorage.getItem('currentUserRole');
              const currentUserId = localStorage.getItem('currentUserId');

              if (role === 'Administrator') {
                this.dataSource = b;
              } else {
                let userRequestList2: any[] = [];

                b.forEach((item: any) => {
                  if (item.userId === currentUserId) {
                    userRequestList2.push(item);
                  }
                });

                // @ts-ignore
                this.dataSource = userRequestList2;
              }
            });
        })
    });
  }

  onSubmit() {
    const currentUser = localStorage.getItem('currentUserId');
    if (!this.form.get(this.userProperty.NAME)?.invalid && this.form.get(this.userProperty.AGE)?.value) {
      this.http.patch(`http://localhost:3000/user_list/${currentUser}`, {
        name: this.form.get(this.userProperty.NAME)?.value,
        age: this.form.get(this.userProperty.AGE)?.value,
      })
        .subscribe(res => {
          this.notValid = false;
          this.currentUser.userName = this.form.get(this.userProperty.NAME)?.value;
          this.currentUser.age = this.form.get(this.userProperty.AGE)?.value;
          // this.data.saveUserData(this.currentUser);
          this.notification.showMessage(this.message.SAVE_DATA);
          console.log(res);
        });
    } else {
      this.notValid = true;
    }
  }

  createParcel(): void {
    const dialogRef = this.dialog.open(DialogRequestWarehouseComponent, {
      data: {square: '', type: '', count: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      const userEmail = localStorage.getItem('currentUserEmail');

      this.notification.showMessage(this.message.SENT_REQUEST);
      this.http.post<any>('http://localhost:3000/request_new_warehouse_client',
        { status: false, square: result.square, type: result.type, count: result.count, email: userEmail, userId: localStorage.getItem('currentUserId') })
        .subscribe(data => {
          console.log(data);
          this.http.get<any>('http://localhost:3000/request_new_warehouse_client')
            .subscribe((res) => {
              const a = JSON.stringify(res);
              const b = JSON.parse(a);

              const role = localStorage.getItem('currentUserRole');
              const currentUserId = localStorage.getItem('currentUserId');

              if (role === 'Administrator') {
                this.dataSource = b;
              } else {
                let userRequestList3: any[] = [];

                b.forEach((item: any) => {
                  if (item.userId === currentUserId) {
                    userRequestList3.push(item);
                  }
                });

                // @ts-ignore
                this.dataSource = userRequestList3;
              }

            });
        })
    });
  }

  onEdit() {
    this.currentUser.userName = '';
    this.currentUser.age = 0;
  }
}
