import { Component, OnInit } from '@angular/core';
import { DocInterface } from '../../models/interfaces';
import { DocService } from '../../services/doc.service';

function matches(doc: DocInterface, term: string) {
  if (term == "" || term == undefined) return true;
  let lterm = term.toLowerCase();
  return doc.Document.toLowerCase().includes(lterm) || doc.Author.toLowerCase().includes(lterm) || doc.Type.toLowerCase().includes(lterm) || doc.Shelf.toLowerCase().includes(lterm)
}

@Component({
  selector:    'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:  ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {   // component controller
  docs: Array<DocInterface>;                          // component property
  collectionSize: number;
  loading: boolean = false;
  searchTerm: string = '';
  
  constructor(private docService: DocService) {  } // DI of DocService service

  loadFromDb() {
    this.loading = true;
    this.docService.getDocuments().subscribe((data: Array<DocInterface>) => {  // subscribe observable
      this.docs = data.filter(element => matches(element, this.searchTerm));
      this.collectionSize = this.docs.length;
      this.loading = false;
    });
  }
    
  fullTextSearch() {
    this.loadFromDb();
  }

  ngOnInit() { 
    this.loadFromDb();
  }
}
