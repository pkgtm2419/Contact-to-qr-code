import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contact-master', pathMatch: 'full' },
  { path: 'contact-master', loadChildren: () => import('./contact-master/contact-master.module').then(m => m.ContactMasterModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
