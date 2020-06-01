import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinDisplayComponent } from './bitcoin-display.component';

describe('BitcoinDisplayComponent', () => {
  let component: BitcoinDisplayComponent;
  let fixture: ComponentFixture<BitcoinDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
