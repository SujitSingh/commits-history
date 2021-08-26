import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './page/page-details/page-details.component';
import { PageHomeComponent } from './page/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'commit/:commitId', component: PageDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
