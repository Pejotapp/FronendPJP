import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';

import { SExperienciaService } from 'src/app/Service/sexperiencia.service';

import { STokenService } from 'src/app/Service/stoken.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: STokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {/*
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }*/
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.experiencia = data;
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe((success) => {
        console.log(success);
        alert('Experiencia borrada');
        this.cargarExperiencia();
      });
    } else {
      alert('No se pudo borrar');
    }

    this.router.navigate(['']);
  }
}