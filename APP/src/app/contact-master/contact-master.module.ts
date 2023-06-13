import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMasterComponent } from './contact-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: ContactMasterComponent},
  {path: ':id', component: DetailsComponent}
];

@NgModule({
  declarations: [
    ContactMasterComponent,
    DetailsComponent
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
export class ContactMasterModule { }
