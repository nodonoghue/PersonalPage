import { Component, OnInit } from '@angular/core';
import { JsonDataReaderService } from '../../services/data/json/json-data-reader.service';

@Component({
  selector: 'app-musings',
  templateUrl: './musings.component.html',
  styleUrls: ['./musings.component.scss']
})
export class MusingsComponent implements OnInit {

  constructor(private jsonService: JsonDataReaderService) { }

  musingsCollection: any;

  ngOnInit(): void {
    //get the musings collection
    this.musingsCollection = this.jsonService.getMusingsJson();
  }

  //TODO: Figure out how to turn the collection of musings into both link cards and individual musing components.
}
