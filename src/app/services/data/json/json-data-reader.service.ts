import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import sampelContents from '../../../data/json/sample.json';
import musingsJson from '../../../data/json/sample-musings.json';

@Injectable({
  providedIn: 'root'
})
export class JsonDataReaderService {

  jsonData: any;

  constructor(private http: HttpClient) {

  }

  getJsonSample(): any {
    console.log("Json contents", sampelContents);
    return sampelContents;
  }

  getMusingsJson(): any {
    console.log('Musings Json', musingsJson);
    return musingsJson;
  }
}
