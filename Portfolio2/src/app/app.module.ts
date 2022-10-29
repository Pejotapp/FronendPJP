import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoAPComponent } from './Components/logo-ap/logo-ap.component';
import { SocialComponent } from './Components/social/social.component';
import { BannerComponent } from './Components/banner/banner.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { LoginComponent } from './Components/login/login.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { TrabajosComponent } from './Components/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    LoginComponent,
    SkillsComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
