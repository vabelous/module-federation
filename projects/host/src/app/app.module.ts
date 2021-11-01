import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PubSubService } from '@core-pub-sub';
// import { PubSubService } from '@core-pub-sub';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PubSubService } from './core/pub-sub';

// export const PubSub = new InjectionToken<PubSubService>('Pub-sub service');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [
  //   { provide: PubSub, useValue: PubSubService },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
