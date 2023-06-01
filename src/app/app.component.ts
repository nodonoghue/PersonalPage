import { Component } from '@angular/core';
import { JsonDataReaderService } from './services/data/json/json-data-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalPage';

  constructor(private jsonService: JsonDataReaderService) {
    this.jsonService.getJSON();
  }
}