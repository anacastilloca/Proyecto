import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestividadInicioComponent } from './festividad-inicio.component';

describe('FestividadInicioComponent', () => {
  let component: FestividadInicioComponent;
  let fixture: ComponentFixture<FestividadInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestividadInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestividadInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
