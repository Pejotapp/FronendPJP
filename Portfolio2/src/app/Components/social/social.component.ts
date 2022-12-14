import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STokenService } from 'src/app/Service/stoken.service';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: STokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  login(){
    this.router.navigate(['/login'])
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}