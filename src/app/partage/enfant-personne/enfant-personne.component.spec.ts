import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantPersonneComponent } from './enfant-personne.component';

describe('EnfantPersonneComponent', () => {
  let component: EnfantPersonneComponent;
  let fixture: ComponentFixture<EnfantPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantPersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
