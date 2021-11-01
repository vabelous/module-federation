import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { PubSubService } from 'projects/host/src/app/core/pub-sub';
// import { PubSubService } from './projects/host/src/app/core/pub-sub';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// export const PubSub = new InjectionToken<PubSubService>('Pub-sub service');
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  // providers: [
  //   { provide: PubSub, useValue: PubSubService },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
