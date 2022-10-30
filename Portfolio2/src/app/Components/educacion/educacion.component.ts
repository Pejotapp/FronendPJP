import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Models/educacion';
import { SEducacionService } from 'src/app/Service/seducacion.service';
import { STokenService } from 'src/app/Service/stoken.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[];

  constructor(
    private sEducacion: SEducacionService,
    private tokenService: STokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
          alert('Educación borrada');
        },
        (err) => {
          alert('No se pudo borrar');
        }
      );
    }
  }
}