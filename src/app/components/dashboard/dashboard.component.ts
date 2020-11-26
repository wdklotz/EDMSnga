import { Component, OnInit }           from '@angular/core';
import { DocService, DocInterface }    from '../../services/doc.service';

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  docs: Array<DocInterface>;      // props

  constructor(private service: DocService) {
    // this.symbols = service.get();
    }

  ngOnInit() {
    // this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);  // observable
    this.service.get().subscribe(doc => this.docs = doc);  // observable
  }
}
