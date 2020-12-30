import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Multistage_fitness_testComponent } from './Multistage_fitness_test/Multistage_fitness_test.component';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Multistage_fitnessService } from './services/Multistage_fitness.service';
@NgModule({
  declarations: [
    AppComponent,
    Multistage_fitness_testComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [Multistage_fitnessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
