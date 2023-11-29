import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
  }


}
