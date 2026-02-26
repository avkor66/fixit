import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBlock } from './choose-block';

describe('ChooseBlock', () => {
  let component: ChooseBlock;
  let fixture: ComponentFixture<ChooseBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
