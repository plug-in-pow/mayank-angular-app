import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {}

  list() {
    this.router.navigate(["complete"],{ relativeTo: this.route });
  }

  showChild() {
    this.router.navigate(["child"],{ relativeTo: this.route });
  }

}
