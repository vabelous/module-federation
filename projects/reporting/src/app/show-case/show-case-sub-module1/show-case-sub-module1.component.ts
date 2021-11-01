import { Component, Inject, OnInit } from '@angular/core';
import { PubSubService } from '@core-pub-sub';
// import { PubSubService } from '@core-pub-sub';
// import { PubSubService } from 'projects/host/src/app/core/pub-sub';

@Component({
  selector: 'app-show-case-sub-module1',
  templateUrl: './show-case-sub-module1.component.html',
  styleUrls: ['./show-case-sub-module1.component.scss']
})
export class ShowCaseSubModule1Component implements OnInit {

  constructor(
    private pubSubService: PubSubService,
  ) { 
    setTimeout(() => {
      this.pubSubService.publish('inboundEvent', { payload: 'sfdsfsd'})
    }, 1000);
  }

  ngOnInit(): void {
  }

}
