import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'http://127.0.0.1:3000/api/lib';   // local express REST server (SQlite3)

// Interfaces? https://www.typescriptlang.org/docs/handbook/interfaces.html
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

@Injectable()
export class DocService implements OnInit {
  data: Array<DocInterface>;
  loading: boolean;
  collectionSize: number;
  text:string;

  constructor(private http: HttpClient) {}   // learn HttpClient !!

  ngOnInit() {
    // this.load();
  }

  // load(): Array<DocInterface> {
  //   this.http.get<Array<DocInterface>>(service).subscribe(data=> {  // observable
  //     this.text = "xxxxxxxxxxxxxxxxxxxxxx";
  //     return data;
  //     // this.collectionSize = data.length;
  //     // this.loading = false;
  //   });
  // }
}
