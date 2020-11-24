import { Component, Input } from '@angular/core';   // dependencies

@Component({                                         // metadata
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {                      // component controller
  @Input() stock: any;                               // component property

  isNegative() {
    return (this.stock && this.stock.change < 0);
    }
    isPositive() {
    return (this.stock && this.stock.change > 0);
    }
}
