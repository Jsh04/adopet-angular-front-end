import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/service/pet/pet.service';

@Component({
  selector: 'app-tabela-pets',
  templateUrl: './tabela-pets.component.html',
  styleUrls: ['./tabela-pets.component.scss']
})
export class TabelaPetsComponent implements OnInit {



  constructor(private petService: PetService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  

  ngOnInit(): void {
    
  }

}
