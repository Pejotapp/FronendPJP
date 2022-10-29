import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { SPersonaService } from 'src/app/Service/spersona.service';
import { STokenService } from 'src/app/Service/stoken.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","","");

  constructor(
    private personaService: SPersonaService,
    private tokenService: STokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data})
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}