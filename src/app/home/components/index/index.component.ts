import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Tricker } from '../../services/models/tricker';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  tricker$: Subscription;
  btc$: Subscription;

  constructor(
    public blockchainService: BlockchainService
  ) { }

  ngOnInit(): void {
    console.log('here');
    this.getBlockList();
    this.convertBtc('USD', '554');
  }

  ngOnDestroy(): void {
    this.tricker$.unsubscribe();
  }

  public getBlockList() {
    this.tricker$ = this.blockchainService.getBicoinPriceList().subscribe(data => console.log(data));
  }

  public convertBtc(currency: string, value: string) {
    this.btc$ = this.blockchainService.getBtcToPrice(currency, value).subscribe(data => console.log(data));
  }

}
