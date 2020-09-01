import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ExitstatusPipe } from './pipes/exitstatus.pipe';
import { DatePipe } from '@angular/common';
import { AddVisitorComponent } from './components/add-visitor/add-visitor.component';
import { EditVisitorComponent } from './components/edit-visitor/edit-visitor.component';
import { HeaderInterceptor } from './interceptors/header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    CardComponent,
    HighlightDirective,
    ExitstatusPipe,
    AddVisitorComponent,
    EditVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
