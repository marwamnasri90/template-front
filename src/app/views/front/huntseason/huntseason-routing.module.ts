import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuntseasonComponent } from './huntseason/huntseason.component';


const routes: Routes = [
  {path:'',component:HuntseasonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuntseasonRoutingModule { }
