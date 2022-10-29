import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
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
import { interceptorProvider } from './Service/sinterceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';
import { EditTrabajosComponent } from './Components/Trabajos/edit-trabajos.component';
import { NewTrabajosComponent } from './Components/Trabajos/new-trabajos.component';
import { EditSkillComponent } from './Components/Skill/edit-skill.component';
import { NewSkillComponent } from './Components/Skill/new-skill.component';
import { EditExperienciaComponent } from './Components/Experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/Experiencia/new-experiencia.component';
import { NewEducacionComponent } from './Components/Educacion/new-educacion.component';
import { EditEducacionComponent } from './Components/Educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    LoginComponent,
    SkillsComponent,
    TrabajosComponent,
    EditAcercaDeComponent,
    EditTrabajosComponent,
    NewTrabajosComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

   
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}