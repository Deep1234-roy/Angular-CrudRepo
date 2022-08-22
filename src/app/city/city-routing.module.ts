import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'city', redirectTo: 'city/index', pathMatch: 'full'},
  {component: IndexComponent,path:'city/index'},
  {component:ViewComponent,path:'city/:cityId/view'},
  {component:CreateComponent,path:'city/create'},
  {component: EditComponent,path:'city/:cityId/edit'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
