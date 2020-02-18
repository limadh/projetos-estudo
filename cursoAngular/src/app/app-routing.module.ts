import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { Form1Component } from './componentes/form1/form1.component';


const routes: Routes = [
  {
    path: '',
    component: NgifNgforComponent
  },
  {
    path: 'lazy', 
    loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(
      m => m.LazyloadingModule
    )
  },
  {
    path: 'form',
    loadChildren: () => import('./form/dataform.module').then(
      mf => mf.DataFormModule
    )
  },
  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'segundo-componente', component:SegundoComponenteComponent},
  {path: 'teste', component: NgifNgforComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'form1', component: Form1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
