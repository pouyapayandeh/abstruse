import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/providers/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-builds',
  template: `<router-outlet></router-outlet>`
})
export class BuildsComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.sub = this.dataService.socketOutput.subscribe(event => {
      console.log(event);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
