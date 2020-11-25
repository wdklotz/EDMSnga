// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StocksService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
// let service: string = 'https://angular2-in-action-api.herokuapp.com';
let service: string = 'http://127.0.0.1:3000/api/lib';

export interface DocInterface {     //??learn
  Document: string;
//   lastTradePriceOnly: number;
//   change: number;
//   changeInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Array<DocInterface>>(service);
  }
  add(stock) {
    stocks.push(stock);
    return this.get();
  }
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }
  // load(symbols) {
  //   if (symbols) {
  //     // returns observable
  //     return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  //   }
  // }
}
