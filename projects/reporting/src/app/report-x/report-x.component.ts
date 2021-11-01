import { Component, OnInit } from '@angular/core';
import { IPubSubDataKey, PubSubService } from '@core-pub-sub';

@Component({
  selector: 'app-report-x',
  templateUrl: './report-x.component.html',
  styleUrls: ['./report-x.component.scss']
})
export class ReportXComponent implements OnInit {

  constructor(
    private pubSubService: PubSubService,
  ) { }

  ngOnInit(): void {
    this._pubSubSubscribe('inboundEvent');   
  }

  public _pubSubSubscribe(pubSubDataKeys: IPubSubDataKey): void {
    switch (pubSubDataKeys) {
      case 'inboundEvent':
        this.pubSubService.subscribe(pubSubDataKeys, this._handleOnEventOccurs);
        break;
    }
  }

  public _pubSubUnsubscribe(pubSubDataKeys: IPubSubDataKey): void {
    switch (pubSubDataKeys) {
      case 'inboundEvent':
        this.pubSubService.unsubscribe(pubSubDataKeys, this._handleOnEventOccurs);
        break;
    }
  }

  private _handleOnEventOccurs = (dataKey: IPubSubDataKey, payload: any): void => {
   console.log(this.constructor.name);
   console.log('_handleOnEventOccurs', dataKey, payload);
  };
  
}
