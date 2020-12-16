import { Component }     from '@angular/core';
import { DocService }    from '../../services/doc.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  // symbols: Array<string>;
  // stock: string;

  constructor(private service: DocService) {
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
