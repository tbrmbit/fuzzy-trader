import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { BitcoinDisplayComponent } from './components/bitcoin-display/bitcoin-display.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    IndexComponent,
    BitcoinDisplayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: IndexComponent,
      }
    ])
  ],
})
export class HomeModule { }
