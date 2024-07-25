import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDevelopmentComponent } from './model-development.component';

describe('ModelDevelopmentComponent', () => {
  let component: ModelDevelopmentComponent;
  let fixture: ComponentFixture<ModelDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ModelDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
