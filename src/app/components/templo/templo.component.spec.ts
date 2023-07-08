import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemploComponent } from './templo.component';

describe('TemploComponent', () => {
  let component: TemploComponent;
  let fixture: ComponentFixture<TemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
