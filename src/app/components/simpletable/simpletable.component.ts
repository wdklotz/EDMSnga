import { Component, Input, OnInit } from '@angular/core';
import { DocInterface }             from '../../services/stocks.service';


@Component({
  selector:    'simpletable',
  templateUrl: './simpletable.component.html',
  styleUrls:  ['./simpletable.component.css']
})
export class SimpletableComponent implements OnInit {
  @Input() 
    docs: Array<DocInterface>;        // component property

  constructor() { }
  ngOnInit(): void {}
}
