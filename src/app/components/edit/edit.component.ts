import { Component }     from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    // this.symbols = service.get();
  }
  add() {
    // this.symbols = this.service.add(this.stock.toUpperCase());
    // this.stock = '';
  }
  remove(symbol) {
    // this.symbols = this.service.remove(symbol);
  }
}
