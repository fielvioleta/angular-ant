import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenesisProjectModalComponent } from './add-genesis-project-modal.component';

describe('AddGenesisProjectModalComponent', () => {
  let component: AddGenesisProjectModalComponent;
  let fixture: ComponentFixture<AddGenesisProjectModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGenesisProjectModalComponent]
    });
    fixture = TestBed.createComponent(AddGenesisProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
