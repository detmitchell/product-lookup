import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from '../shared';


@Component({
  selector: 'list-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {
  results: Array<object> = []
  
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ){}

  ngOnInit(){
    this.route.url.subscribe(data => {
      let payload = data[data.length-1].path
      this.searchService.search(payload)
        .subscribe(
          serviceData => this.results = serviceData,
          err => {
            console.log(err);
          }
        )
    })
  }
}