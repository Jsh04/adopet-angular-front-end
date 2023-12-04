import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abrigo } from 'src/app/models/abrigo';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {


  @Input()
  pet: Pet = new Pet();

  constructor(private router: Router) {}

  RedirecionarParaAdocao(idPet: number) {
    this.router.navigateByUrl(`tutor/adocao/${idPet}`);
  }

  ngOnInit(): void {
  }


}
