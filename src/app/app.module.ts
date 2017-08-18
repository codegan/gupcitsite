import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { NewsComponent } from './news.component';
import { SeminarsComponent } from './seminars.component';
import { ContactsComponent } from './contacts.component';
import { GalleryComponent } from './gallery.component';
import { InfoComponent } from './info.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'seminars', component: SeminarsComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NewsComponent,
    SeminarsComponent,
    InfoComponent,
    GalleryComponent,
    ContactsComponent,
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
