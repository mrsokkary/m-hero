import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './table/productservice';
import { SampleTable } from './table/sample-table.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SampleTable
  ],
  imports: [
    BrowserModule,
    TableModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: SampleTable }])
  ],
  providers: [ ProductService ],
  bootstrap: [SampleTable]
})
export class AppModule { }
