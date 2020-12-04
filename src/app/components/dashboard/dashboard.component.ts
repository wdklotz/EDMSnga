import { Component, OnInit } from '@angular/core';
import { DocInterface } from '../../models/docinterface.model';
import { DocService } from '../../services/doc.service';

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {   // component controller
  docs: Array<DocInterface>;                          // component property
  collectionSize: number;
  loading: boolean = false;

  constructor(private docService: DocService) {} // DI of DocService service
    
  ngOnInit() { 
    this.loading = true;
    this.docService.getDocuments().subscribe((data: Array<DocInterface>) => {  // subscribe observable
      this.docs = data;
      this.collectionSize = data.length;
      this.loading = false;
    });
  }
}