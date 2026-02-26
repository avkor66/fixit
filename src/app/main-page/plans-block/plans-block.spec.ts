import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansBlock } from './plans-block';

describe('PlansBlock', () => {
  let component: PlansBlock;
  let fixture: ComponentFixture<PlansBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
