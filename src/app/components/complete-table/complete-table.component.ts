import {Component, Input, OnInit } from '@angular/core';
import { DocInterface } from '../../models/interfaces';
import { ConfigService } from '../../services//config.service';

@Component({
  selector:    'complete-table',
  templateUrl: './complete-table.component.html',
  styleUrls:  ['./complete-table.component.css']
})
export class CompleteTableComponent implements OnInit {
  @Input() docs : Array<DocInterface>;
  page = 1;
  pageSize = 15;
  maxSize = 10;
  statics = ConfigService.get('statics');

  constructor() { }

ngOnInit(): void { }
}