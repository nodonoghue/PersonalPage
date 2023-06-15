import { Component, OnInit } from '@angular/core';
import { JsonDataReaderService } from '../../services/data/json/json-data-reader.service';
//import { Musing, Paragraph } from '../../models/musing';

@Component({
  selector: 'app-musings',
  templateUrl: './musings.component.html',
  styleUrls: ['./musings.component.scss']
})
export class MusingsComponent implements OnInit {

  constructor(private jsonService: JsonDataReaderService) { }

  musingJson: any;
  //musings: Musing[];

  ngOnInit(): void {
    //get the musings collection
    this.musingJson = this.jsonService.getMusingsJson();
    console.log("Musing 1", this.musingJson.Musings[0].title);
  }

  deserializeJson(jsonText: string) {

  }
  //TODO: Figure out how to turn the collection of musings into both link cards and individual musing components.
}
