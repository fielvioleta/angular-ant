import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesisComponent } from './genesis.component';

describe('GenesisComponent', () => {
  let component: GenesisComponent;
  let fixture: ComponentFixture<GenesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenesisComponent]
    });
    fixture = TestBed.createComponent(GenesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
