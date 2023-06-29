import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteComponent } from './upadte.component';

describe('UpadteComponent', () => {
  let component: UpadteComponent;
  let fixture: ComponentFixture<UpadteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpadteComponent]
    });
    fixture = TestBed.createComponent(UpadteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
