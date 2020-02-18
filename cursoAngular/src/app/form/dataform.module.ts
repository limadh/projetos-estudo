import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataformRoutinModule } from './dataform-routing-module';
import { FormComponent } from './form.component';



@NgModule({
  
  imports: [
    CommonModule,
    DataformRoutinModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  declarations: [
    FormComponent
  ]

})
export class DataFormModule { }
