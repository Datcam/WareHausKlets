import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@header/header.component';
import { GamesPageComponent } from '@games-page/games-page.component';
import { MainPageComponent } from '@main-page/main-page.component';
import { LibraryPageComponent } from '@library-page/library-page.component';
import { FriendsPageComponent } from '@friends-page/friends-page.component';
import { ProfilePageComponent } from '@profile-page/profile-page.component';
import { LoginPageComponent } from '@login-page/login-page.component';
import { NotificationComponent } from '@notification/notification.component';

import { NotificationService } from '@services/notification.service';
import { DataService } from '@services/data.service';
import { AuthService } from '@services/auth.service';
import { AuthGuard } from '@services/auth-guard.service';
import { ImagePathPipe } from '@shared/pipes/image-path.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogRequestServiceComponent } from "./components/dialog-request-service/dialog-request-service.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { SignUpPageComponent } from "./components/sign-up-page/sign-up-page.component";
import { EventBusService } from "@services/event-bus.service";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { NewsPageComponent } from "./components/news/news-page.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {DeliveryPageComponent} from "./components/delivery/delivery-page.component";
import {MatStepperModule} from "@angular/material/stepper";
import {AboutUsPageComponent} from "./components/about_us/about-us-page.component";
import {ContactsPageComponent} from "./components/contacts/contacts-page.component";
import {WarehousePageComponent} from "./components/warehouse/warehouse-page.component";
import {OdessaWarehousePageComponent} from "./components/odessa-warehouse/odessa-warehouse-page.component";
import {KeywWarehousePageComponent} from "./components/kyew-warehouse/keyw-warehouse-page.component";
import {LvivWarehousePageComponent} from "./components/lviv-warehouse/lviv-warehouse-page.component";
import {DneprWarehousePageComponent} from "./components/dnepr-warehouse/dnepr-warehouse-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesPageComponent,
    MainPageComponent,
    LibraryPageComponent,
    FriendsPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    NotificationComponent,
    ImagePathPipe,
    DialogRequestServiceComponent,
    SignUpPageComponent,
    NewsPageComponent,
    DeliveryPageComponent,
    AboutUsPageComponent,
    ContactsPageComponent,
    WarehousePageComponent,
    OdessaWarehousePageComponent,
    KeywWarehousePageComponent,
    LvivWarehousePageComponent,
    DneprWarehousePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    CarouselModule,
    WavesModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotificationService,
    DataService,
    DialogRequestServiceComponent,
    EventBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
