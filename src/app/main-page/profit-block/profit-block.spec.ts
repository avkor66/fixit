import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitBlock } from './profit-block';

describe('ProfitBlock', () => {
  let component: ProfitBlock;
  let fixture: ComponentFixture<ProfitBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
