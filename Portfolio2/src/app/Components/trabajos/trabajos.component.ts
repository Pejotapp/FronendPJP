import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/model/Trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent implements OnInit {
  trabajos: Trabajo[];

  constructor(
    private traService: TrabajoService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarTrabajos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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