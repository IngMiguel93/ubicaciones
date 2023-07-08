import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoComponent } from './asado.component';

describe('AsadoComponent', () => {
  let component: AsadoComponent;
  let fixture: ComponentFixture<AsadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
