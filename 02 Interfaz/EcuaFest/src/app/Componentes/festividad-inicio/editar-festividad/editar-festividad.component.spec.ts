import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFestividadComponent } from './editar-festividad.component';

describe('EditarFestividadComponent', () => {
  let component: EditarFestividadComponent;
  let fixture: ComponentFixture<EditarFestividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFestividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFestividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
