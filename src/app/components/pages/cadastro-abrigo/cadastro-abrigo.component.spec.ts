import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAbrigoComponent } from './cadastro-abrigo.component';

describe('CadastroAbrigoComponent', () => {
  let component: CadastroAbrigoComponent;
  let fixture: ComponentFixture<CadastroAbrigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAbrigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAbrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
