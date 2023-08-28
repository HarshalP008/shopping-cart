import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFormAComponent } from './add-item-form-a.component';

describe('AddItemFormAComponent', () => {
  let component: AddItemFormAComponent;
  let fixture: ComponentFixture<AddItemFormAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemFormAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
