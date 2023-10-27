import { Component, ElementRef } from '@angular/core';
import { RouteService } from './service/route.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopet-angular';

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const rotaAtual: string = event.url;
        this.MudarBackGroundColor(rotaAtual);
      }
    });
  }

  MudarBackGroundColor(rotaAtual: string){
    const body: HTMLBodyElement = document.querySelector('body')!;
    if (rotaAtual === '/') {
      body.style.backgroundColor = '#3772FF';
    }else{
      body.style.backgroundColor = '#fff'
    }
  }
}
