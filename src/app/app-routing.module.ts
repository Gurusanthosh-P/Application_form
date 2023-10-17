import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { AdmissionComponent } from 'src/admission/admission.component';
import { HomeComponent } from 'src/home/home.component';
import { ShowComponent } from 'src/show/show.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:AdmissionComponent,path:'admission'},
  {component:AboutComponent,path:'about'},
  {component:ShowComponent,path:'show'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
