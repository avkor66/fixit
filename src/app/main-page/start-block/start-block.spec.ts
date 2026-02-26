import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBlock } from './start-block';

describe('StartBlock', () => {
  let component: StartBlock;
  let fixture: ComponentFixture<StartBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
