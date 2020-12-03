import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocInterface } from '../../models/docinterface.model';
import { ConfigService } from '../../services/config.service';
import { DocService } from '../../services/doc.service';

// let service: string = 'http://127.0.0.1:3000/api/lib';   // local express REST server (SQlite3)

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css'],
  providers: [DocService],
})
export class DashboardComponent implements OnInit {   // component controller
  docs: Array<DocInterface>;                          // component property
  collectionSize: number;
  loading: boolean = false;

  // constructor(private http: HttpClient) {} // DI of http service
  constructor(private docService: DocService) {} // DI of http service
    
  ngOnInit() { 
    this.loading = true;
    this.docService.getDocuments().subscribe((data: Array<DocInterface>) => {  // observable
      this.docs = data;
      this.collectionSize = data.length;
      this.loading = false;
    });
  }
}