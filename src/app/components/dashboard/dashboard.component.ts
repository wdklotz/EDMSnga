import { Component, OnInit }           from '@angular/core';
import { DocService, DocInterface }    from '../../services/doc.service';

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {   // controller
  docs: Array<DocInterface>;      // props
  private service: DocService;

  constructor( service: DocService) {
    this.service = service;
    }

  ngOnInit() {
    this.service.get().subscribe(doc => this.docs = doc);  // observable
  }
}
