import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'http://127.0.0.1:3000/api/lib';

export interface DocInterface {     //??learn TypeScript!!
  id?       : number;
  Favorite? : string;
  Document? : string;
  author?   : number;
  type?     : number;
  shelf?    : number;
  Keywords? : string;
  Trash?    : string;
  Author?   : string;
  Type?     : string;
  Shelf?    : string;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) {}   // learn HttpClient !!

  get() {
    return this.http.get<Array<DocInterface>>(service);  // returns observable
  }
  // add(stock) {
  //   stocks.push(stock);
  //   return this.get();
  // }
  // remove(stock) {
  //   stocks.splice(stocks.indexOf(stock), 1);
  //   return this.get();
  // }
  // load(symbols) {
  //   if (symbols) {
  //     // returns observable
  //     return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  //   }
  // }
}
