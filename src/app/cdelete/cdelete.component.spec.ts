import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdeleteComponent } from './cdelete.component';

describe('CdeleteComponent', () => {
  let component: CdeleteComponent;
  let fixture: ComponentFixture<CdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdeleteComponent]
    });
    fixture = TestBed.createComponent(CdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
