import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfessionsComponent } from './show-professions.component';

describe('ShowProfessionsComponent', () => {
  let component: ShowProfessionsComponent;
  let fixture: ComponentFixture<ShowProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProfessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
