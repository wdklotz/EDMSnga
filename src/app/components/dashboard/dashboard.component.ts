import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';
// import { DocInterface }    from '../../services/doc.service';

let service: string = 'http://127.0.0.1:3000/api/lib';   // local express REST server (SQlite3)

export interface DocInterface {
  id       : number;
  Favorite : string;
  Document : string;
  author   : number;
  type     : number;
  shelf    : number;
  Keywords : string;
  Trash    : string;
  Author   : string;
  Type     : string;
  Shelf    : string;
  select?  : boolean;
}

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {   // component controller
  docs: Array<DocInterface>;                          // component property
  collectionSize: number;
  loading: boolean = false;

  asJSON(anz: string = '1'): string {
    return JSON.stringify(this.docs.slice(0,parseInt(anz)));
  };

  constructor(private http: HttpClient) {  // DI of http service
  }
    
  ngOnInit() { 
    this.loading = true;
    this.http.get(service).subscribe((data: Array<DocInterface>)=> {  // observable
      this.docs = data;
      this.collectionSize = data.length;
      this.loading = false;
    });
  }
}


