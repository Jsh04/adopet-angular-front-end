import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPetsComponent } from './tabela-pets.component';

describe('TabelaPetsComponent', () => {
  let component: TabelaPetsComponent;
  let fixture: ComponentFixture<TabelaPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
