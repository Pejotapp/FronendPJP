import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/Models/trabajo';
import { STrabajoService } from 'src/app/Service/strabajo.service';

@Component({
  selector: 'app-new-trabajos',
  templateUrl: './new-trabajos.component.html',
  styleUrls: ['./new-trabajos.component.css']
})
export class NewTrabajosComponent implements OnInit {
  nombreTrabajo: string;
  descripcionTrabajo: string;
  linkTrabajo: string;
  //imagen por default
  imgtrabajo: string = '../../../assets/trabajos/trabajoDefault.png';

  constructor(private traService: STrabajoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const trabajo = new Trabajo(
      this.nombreTrabajo,
      this.descripcionTrabajo,
      this.imgtrabajo,
      this.linkTrabajo
    );

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

    //guarda el nuevo trabajo y vuelve a pagina principal
    this.traService.save(trabajo).subscribe((response) => {
      alert('Trabajo añadido');
      this.traService.lista();
      this.router.navigate(['']);
    });
  }
}