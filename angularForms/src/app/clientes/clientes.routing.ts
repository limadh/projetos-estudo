import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

const routes: Routes = [

    { path: '', component: ListarClientesComponent },
    { path: 'novo', component: NovoClienteComponent },
    { path: 'editar/:id', component: EditarClienteComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule{}