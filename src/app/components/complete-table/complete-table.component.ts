import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { DocInterface } from '../../services/doc.service';
// import {NgbdSortableHeader, SortEvent}                     from '../../directives/sortable.directive';

@Component({
  selector:    'complete-table',
  templateUrl: './complete-table.component.html',
  styleUrls:  ['./complete-table.component.css']
})
export class CompleteTableComponent implements OnInit {
@Input()
  docs : Array<DocInterface>;

  // @ViewChildren(NgbdSortableHeader) 
  //   headers: QueryList<NgbdSortableHeader>;

  constructor() { }

  // onSort({column, direction}: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach(header => {
  //     if (header.sortable !== column) {
  //       header.direction = '';
  //     }
  //   });
  //   this.service.sortColumn = column;
  //   this.service.sortDirection = direction;
  // }
ngOnInit(): void { }
}


// import {DecimalPipe} from '@angular/common';
// import {Component, QueryList, ViewChildren} from '@angular/core';
// import {Observable} from 'rxjs';

// import {Country} from './country';
// import {CountryService} from './country.service';
// import {NgbdSortableHeader, SortEvent} from './sortable.directive';

// @Component(
//     {selector: 
//       'ngbd-table-complete', 
//        templateUrl: './table-complete.html', 
//        providers: [CountryService, DecimalPipe]
//      })
// export class NgbdTableComplete {
//   countries$: Observable<Country[]>;
//   total$: Observable<number>;

//   @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

//   constructor(public service: CountryService) {
//     this.countries$ = service.countries$;
//     this.total$ = service.total$;
//   }

//   onSort({column, direction}: SortEvent) {
//     // resetting other headers
//     this.headers.forEach(header => {
//       if (header.sortable !== column) {
//         header.direction = '';
//       }
//     });

//     this.service.sortColumn = column;
//     this.service.sortDirection = direction;
//   }
// }