import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  readonly ABRIGO: string = 'Abrigo'

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  eAbrigo(): boolean{
    if (this.userService.retornarRole() == this.ABRIGO) 
      return true
    else 
      return false
  }

}
