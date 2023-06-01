import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataReaderService {

  jsonData: any;

  constructor(private http: HttpClient) {
    this.jsonData = this.getJSON().subscribe(data => { console.log("Data", data) });
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../../data/json/sample.json");
  }
}
