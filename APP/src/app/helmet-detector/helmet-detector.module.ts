import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelmetDetectorComponent } from './helmet-detector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: '', component: HelmetDetectorComponent},
];

@NgModule({
  declarations: [
    HelmetDetectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HelmetDetectorModule { }
