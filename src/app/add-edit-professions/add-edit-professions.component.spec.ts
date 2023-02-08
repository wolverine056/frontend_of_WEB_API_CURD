import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProfessionsComponent } from './add-edit-professions.component';

describe('AddEditProfessionsComponent', () => {
  let component: AddEditProfessionsComponent;
  let fixture: ComponentFixture<AddEditProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProfessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
