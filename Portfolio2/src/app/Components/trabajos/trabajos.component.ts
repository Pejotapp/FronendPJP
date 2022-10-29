import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STrabajoService } from 'src/app/Service/strabajo.service';
import { STokenService } from 'src/app/Service/stoken.service';
import { Trabajo } from 'src/app/Models/trabajo';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent implements OnInit {
  trabajos: Trabajo[];

  constructor(
    private traService: STrabajoService,
    private tokenService: STokenService,
    private router: Router
  ) {}
  isLogged = false;

  ngOnInit(): void {/* 
    this.cargarTrabajos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }*/
  }
  cargarTrabajos() {
    this.traService.lista().subscribe((data) => {
      this.trabajos = data;
    });
    }

  delete(id: number): void {
    if (id != undefined) {
      this.traService.delete(id).subscribe((success) => {
        alert('Trabajo borrado');
        this.cargarTrabajos();
      });
    }
    this.router.navigate(['']);
  }
}