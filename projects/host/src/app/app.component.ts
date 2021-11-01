import { Component, Inject, OnDestroy } from '@angular/core';
import { IPubSubDataKey, PubSubService } from '@core-pub-sub';

// import { IPubSubDataKey, PubSubService } from './core/pub-sub';
// import { IPubSubDataKey, PubSubService } from '@core-pub-sub';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host';

  constructor(
   private pubSubService: PubSubService,
  ) {
    this._pubSubSubscribe('inboundEvent');    
    setTimeout(() => {
      this.pubSubService.publish('inboundEvent', { payload: '4444444'})
    }, 2000);
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
