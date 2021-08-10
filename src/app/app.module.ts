import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DataOverviewComponent } from './data-overview/data-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataCompleteComponent } from './data-complete/data-complete.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataJsonService } from './api-data-json.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DataOverviewComponent,
    PageNotFoundComponent,
    DataCompleteComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiDataJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
