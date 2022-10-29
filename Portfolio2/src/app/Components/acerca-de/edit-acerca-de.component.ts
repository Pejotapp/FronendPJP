import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/persona';
import { SPersonaService } from 'src/app/Service/spersona.service';
import { STokenService } from 'src/app/Service/stoken.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona;

  constructor(
    public personaService: SPersonaService,
    private tokenService: STokenService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onUpdate(): void {
    //para deshabilitar el envío de formularios si hay campos no válidos
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
    //si esta todo ok realiza la edicion
    this.personaService.editarPersona(this.persona).subscribe((data) => {
      alert('Persona modificada');
      this.router.navigate(['']);
    });
  }
}