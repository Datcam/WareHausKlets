import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth-guard.service';
import { GamesPageComponent } from '@games-page/games-page.component';
import { MainPageComponent } from '@main-page/main-page.component';
import { LibraryPageComponent } from '@library-page/library-page.component';
import { FriendsPageComponent } from '@friends-page/friends-page.component';
import { ProfilePageComponent } from '@profile-page/profile-page.component';
import { LoginPageComponent } from '@login-page/login-page.component';
import { SignUpPageComponent } from "./components/sign-up-page/sign-up-page.component";
import { NewsPageComponent } from "./components/news/news-page.component";
import {DeliveryPageComponent} from "./components/delivery/delivery-page.component";
import {AboutUsPageComponent} from "./components/about_us/about-us-page.component";
import {ContactsPageComponent} from "./components/contacts/contacts-page.component";
import {WarehousePageComponent} from "./components/warehouse/warehouse-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch:'full' },
  { path: 'auth', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'delivery', component: DeliveryPageComponent, canActivate: [AuthGuard] },
  { path: 'about_us', component: AboutUsPageComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'warehouse', component: WarehousePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
