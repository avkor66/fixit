import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubBlock } from './hub-block';

describe('HubBlock', () => {
  let component: HubBlock;
  let fixture: ComponentFixture<HubBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
