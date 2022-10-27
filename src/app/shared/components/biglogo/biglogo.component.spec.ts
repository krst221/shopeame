import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiglogoComponent } from './biglogo.component';

describe('BiglogoComponent', () => {
  let component: BiglogoComponent;
  let fixture: ComponentFixture<BiglogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiglogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiglogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
