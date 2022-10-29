import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Trabajo } from 'src/app/Models/trabajo';
import { STrabajoService } from 'src/app/Service/strabajo.service';

@Component({
  selector: 'app-edit-trabajos',
  templateUrl: './edit-trabajos.component.html',
  styleUrls: ['./edit-trabajos.component.css']
})
export class EditTrabajosComponent implements OnInit {
  trabajo: Trabajo = null;

  constructor(
    private traService: STrabajoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.traService.listaPorId(id).subscribe((data) => {
      this.trabajo = data;
    });
  }
  onUpdate(): void {
    //deshabilitar el envío de formularios si hay campos no válidos
    (function () {
      'use strict';

      // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
      var forms = document.querySelectorAll('.needs-validation');

      // Bucle sobre ellos y evitar el envío
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event: any): void {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          },
          false
        );
      });
    })();

    //si campos validados, realiza el update
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.traService.update(id, this.trabajo).subscribe((data) => {
      this.traService = data;
      alert('trabajo Modificado');
      this.router.navigate(['']);
    });
  }
}