import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDisponiveisComponent } from './pets-disponiveis.component';

describe('PetsDisponiveisComponent', () => {
  let component: PetsDisponiveisComponent;
  let fixture: ComponentFixture<PetsDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsDisponiveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
