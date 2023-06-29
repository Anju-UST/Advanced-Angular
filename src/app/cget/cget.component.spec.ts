import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgetComponent } from './cget.component';

describe('CgetComponent', () => {
  let component: CgetComponent;
  let fixture: ComponentFixture<CgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgetComponent]
    });
    fixture = TestBed.createComponent(CgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
