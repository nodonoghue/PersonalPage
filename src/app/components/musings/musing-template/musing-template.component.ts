import { Component, OnInit } from '@angular/core';
import { JsonDataReaderService } from '../../../services/data/json/json-data-reader.service';
@Component({
  selector: 'app-musing-template',
  templateUrl: './musing-template.component.html',
  styleUrls: ['./musing-template.component.scss']
})
export class MusingTemplateComponent implements OnInit {

  constructor(private jsonReader: JsonDataReaderService) {

  }

  musings: any;

  ngOnInit(): void {
    this.musings = this.jsonReader.getMusingsJson();
  }
}
