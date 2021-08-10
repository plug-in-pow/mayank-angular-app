import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDataJsonService } from '../api-data-json.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search(value: any) {
    this.router.navigate(['first-component',value]);
  }

}
