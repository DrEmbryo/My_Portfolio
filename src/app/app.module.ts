import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GaleryPageComponent } from './galery-page/galery-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '',  redirectTo: '/main', pathMatch: 'full' },
  { path: 'galery', component: GaleryPageComponent },
  { path: '**', component: PageNotFoundComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GaleryPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
