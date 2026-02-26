import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBlock } from './join-block';

describe('JoinBlock', () => {
  let component: JoinBlock;
  let fixture: ComponentFixture<JoinBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
