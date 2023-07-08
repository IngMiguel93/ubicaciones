import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasmisionComponent } from './trasmision.component';

describe('TrasmisionComponent', () => {
  let component: TrasmisionComponent;
  let fixture: ComponentFixture<TrasmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasmisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
