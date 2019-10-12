import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ForParentsComponent } from './for-parents/for-parents.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponent } from './home/slider/slider.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EnrollmentComponent,
    ForParentsComponent,
    GalleryComponent,
    ContactUsComponent,
    SliderComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'enrollment', component: EnrollmentComponent},
      {path: 'parents', component: ForParentsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: '**', component: ErrorPageComponent},
      {path: '', component: HomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
