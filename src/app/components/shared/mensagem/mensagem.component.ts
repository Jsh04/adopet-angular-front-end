import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mensagem-component',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {


  @Input() 
  texto: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
