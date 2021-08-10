import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiDataJsonService } from '../api-data-json.service';

@Component({
  selector: 'app-data-overview',
  templateUrl: './data-overview.component.html',
  styleUrls: ['./data-overview.component.css']
})
export class DataOverviewComponent implements OnInit {

  jsonData: any = {};
  score: any = '';
  tableData: Array<any> = [];

  constructor(private route:ActivatedRoute, private router: Router,private apiservice:ApiDataJsonService) {}

  ngOnInit(): void {
    this.setDataFromApi();
  }

  setDataFromApi() {
      this.apiservice.getData().subscribe((data: any) => {
        this.jsonData = data;
        this.filterDataOnId(this.jsonData);
      });
  }

  filterDataOnId(data: any) {
    this.route.params.subscribe(params => {
      this.score = params['id'];
      this.tableData = data.experienceSummaryAsPercent.filter((x:any) => x.score == this.score);
    });
  }

  search(value: string){
    this.router.navigate(['first-component',value]);
  }

}
