import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteListComponent } from './carte-list.component';

describe('CarteListComponent', () => {
  let component: CarteListComponent;
  let fixture: ComponentFixture<CarteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
