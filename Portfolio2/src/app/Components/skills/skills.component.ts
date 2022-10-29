import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SSkillService } from 'src/app/Service/sskill.service';
import { STokenService } from 'src/app/Service/stoken.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skills[];

  constructor(
    private skillsService: SSkillService,
    private tokenService: STokenService,
    private router: Router
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe((data) => {
      this.skills = data;
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe((success) => {
        alert('Skill borrada');
        this.cargarSkills();
      });
    }
    this.router.navigate(['']);
  }
}