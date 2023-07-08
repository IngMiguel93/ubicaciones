import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindisComponent } from './brindis.component';

describe('BrindisComponent', () => {
  let component: BrindisComponent;
  let fixture: ComponentFixture<BrindisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrindisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrindisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
