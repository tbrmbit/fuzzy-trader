import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { IndexComponent } from './index.component';
import { of, Observable } from 'rxjs';


@Injectable()
class BlockchainServiceStub {
  getBicoinPriceList(): Observable<any> {
    return of('list');
  }
}

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      providers: [
        { provide: BlockchainService, useClass: BlockchainServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
