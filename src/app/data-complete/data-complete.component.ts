import { Component, OnInit } from '@angular/core';
import { ApiDataJsonService } from '../api-data-json.service';

@Component({
  selector: 'app-data-complete',
  templateUrl: './data-complete.component.html',
  styleUrls: ['./data-complete.component.css']
})
export class DataCompleteComponent implements OnInit {

  jsonData: any = {};

  constructor(private apiservice: ApiDataJsonService) {}

  ngOnInit(): void {
    this.apiservice.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }

}
