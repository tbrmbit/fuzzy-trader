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
  btcTotal: string;

  constructor(
    public blockchainService: BlockchainService
  ) { }

  ngOnInit(): void {
    this.getBlockList();
  }

  ngOnDestroy(): void {
    this.tricker$.unsubscribe();
    this.btc$.unsubscribe();
  }

  public getBlockList() {
    this.tricker$ = this.blockchainService.getBicoinPriceList()
                                          .subscribe(data => console.log(data));
  }

  public convertBtc(currency: string, value: string) {
    this.btc$ = this.blockchainService.getBtcToPrice(currency, value)
                                      .subscribe(data => this.btcTotal = data);
  }

  public onChangeMoney(value) {
    this.convertBtc('USD', value);
  }

}
