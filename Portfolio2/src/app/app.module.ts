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
import { EditEducacionComponent } from './Components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './Components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './Components/skills/edit-skill.component';
import { NewSkillComponent } from './Components/skills/new-skill.component';
import { EditTrabajosComponent } from './Components/trabajos/edit-trabajos.component';
import { NewTrabajosComponent } from './Components/trabajos/new-trabajos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


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
    NgCircleProgressModule.forRoot({})
   
   
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}