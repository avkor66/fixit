import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectBlock } from './connect-block';

describe('ConnectBlock', () => {
  let component: ConnectBlock;
  let fixture: ComponentFixture<ConnectBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
