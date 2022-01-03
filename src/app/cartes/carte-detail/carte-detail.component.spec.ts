import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDetailComponent } from './carte-detail.component';

describe('CarteDetailComponent', () => {
  let component: CarteDetailComponent;
  let fixture: ComponentFixture<CarteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
