import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

// Interfaces? https://www.typescriptlang.org/docs/handbook/interfaces.html
import { DocInterface } from '../models/docinterface.model';

@Injectable()
export class DocService {

  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<Array<DocInterface>>(ConfigService.get('api'));
  }
}
