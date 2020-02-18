import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import {HomelazyComponent} from 'src/app/componentes/homelazy/homelazy.component';

const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children: [
      {
        path:'lazy2',
        component: HeaderComponent
      }
    ]
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
