import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bitcoin-display',
  templateUrl: './bitcoin-display.component.html',
  styleUrls: ['./bitcoin-display.component.scss']
})
export class BitcoinDisplayComponent implements OnInit {
  @Input() totalBTC: string;
  @Output() changeMoney = new EventEmitter<string>();

  public money = 0;
  private timer;

  constructor() { }

  ngOnInit(): void {
  }

  public onKeyHandler(event) {
    (this.timer) ? clearTimeout(this.timer) : '';

    this.timer = setTimeout(() => {
      this.changeMoney.emit(this.money.toString());
    }, 500);
  }

}
