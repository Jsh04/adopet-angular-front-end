import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';

@Directive({
  selector: '[appRotaBackGroundBody]'
})
export class RotaBackGroundBodyDirective implements OnInit {

  @Input() rota!: string;

  constructor(private el: ElementRef, private routeService: RouteService) {}

  ngOnInit(): void {
    this.routeService.rotaAtual = this.routeService.rotaAtual || '/';
    console.log(this.rota);
    console.log(this.routeService.rotaAtual);


    if (this.rota == this.routeService.rotaAtual) {
      console.log(this.routeService.rotaAtual);

      this.el.nativeElement.style.backgroundColor = '#fff';
    }
  }

}
