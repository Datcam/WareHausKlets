import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { LibraryPageComponent } from './components/library-page/library-page.component';
import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesPageComponent,
    LibraryPageComponent,
    FriendsPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    NotificationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
