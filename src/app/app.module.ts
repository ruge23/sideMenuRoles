import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from './../pages/menu/menu';
import { UserSecondPage } from './../pages/user-second/user-second';
import { UserPage } from './../pages/user/user';
import { AdminSecondPage } from './../pages/admin-second/admin-second';
import { AdminPage } from './../pages/admin/admin';
import { LoginPage } from './../pages/login/login';
import { FirstPage } from './../pages/first/first';
import { PerfilPage } from './../pages/perfil/perfil';
import { SegurosPage } from './../pages/seguros/seguros';
import { AyudaPage } from './../pages/ayuda/ayuda';

import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { ServicesProvider } from '../providers/services/services';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    AdminSecondPage,
    UserPage,
    UserSecondPage,
    MenuPage,
    FirstPage,
    PerfilPage,
    AyudaPage,
    SegurosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    AdminSecondPage,
    UserPage,
    UserSecondPage,
    MenuPage,
    FirstPage,
    PerfilPage,
    AyudaPage,
    SegurosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ServicesProvider
  ]
})
export class AppModule {}
