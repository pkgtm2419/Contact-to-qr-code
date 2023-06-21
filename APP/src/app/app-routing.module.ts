import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'helmet-detector', pathMatch: 'full' },
  { path: 'contact-master', loadChildren: () => import('./contact-master/contact-master.module').then(m => m.ContactMasterModule)},
  { path: 'helmet-detector', loadChildren: () => import('./helmet-detector/helmet-detector.module').then(m => m.HelmetDetectorModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
