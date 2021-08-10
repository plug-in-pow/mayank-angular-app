import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DataCompleteComponent } from './data-complete/data-complete.component';
import { DataOverviewComponent } from './data-overview/data-overview.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  { path:"" , redirectTo:"first-component", pathMatch:"full" },
  { 
    path:"first-component", 
    children: [
      { path:"", component: FirstComponentComponent },
      { path:":id", component: DataOverviewComponent },
    ]
  },
  { 
    path:"second-component", 
    component: SecondComponentComponent,
    children: [
      {path:"complete",component: DataCompleteComponent},
      {path:"child",component: ChildComponentComponent}
    ]
  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
