import { Component, Input } from '@angular/core';
import { DocInterface } from '../../services/doc.service';


@Component({
  selector:    'pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() docs: Array<DocInterface>;        // component property
  @Input() collectionSize: number;
  page = 1;
  pageSize = 100;
  documents: Array<DocInterface>;
 
  constructor() {  
    console.log("PaginationComponent.constructor()");
  }

  refreshDocuments() {
    // this.documents = this.docs.map((doc, i) => ({id: i + 1, ...doc})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    this.docs = this.docs.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    // this.documents = this.docs.slice();
  }
}
// @Component({
//   selector: 'ngbd-table-pagination',
//   templateUrl: './table-pagination.html'
// })
// export class NgbdTablePagination {

//   page = 1;
//   pageSize = 4;
//   collectionSize = COUNTRIES.length;
//   countries: Country[];

//   constructor() {
//     this.refreshCountries();
//   }

//   refreshCountries() {
//     this.countries = COUNTRIES
//       .map((country, i) => ({id: i + 1, ...country}))
//       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
//   }
// }