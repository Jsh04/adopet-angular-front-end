import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: '<ngx-loading [show]="loading"></ngx-loading>',
})
export class LoaderComponent {

  constructor(private loaderService: LoaderService) { }

  public loading: boolean = this.loaderService.isLoading.closed;

}
