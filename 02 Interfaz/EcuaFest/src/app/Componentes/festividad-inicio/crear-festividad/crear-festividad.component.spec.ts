import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFestividadComponent } from './crear-festividad.component';

describe('CrearFestividadComponent', () => {
  let component: CrearFestividadComponent;
  let fixture: ComponentFixture<CrearFestividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFestividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFestividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
