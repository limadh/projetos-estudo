import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { CrudClienteService } from 'src/app/services/crud.cliente.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes : ClienteModel[];
  erro: any;
  clientesPage: number = 10;
  totalClientes: number;

  constructor(
    private clienteServ: CrudClienteService
  ) { }

  ngOnInit() {    
    this.getter(0, this.clientesPage);
    this.setTotalClientes();
  }

  paginate(event){
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.getter(event.page, this.clientesPage);
  }

  getter(page, size){
    this.clienteServ.getPageClientes(page, size)
    .subscribe(
      dados => this.clientes = dados.content
      /*
      (data: ClienteModel) => {
        this.clientes = data;
        console.log('O data que recebemos ' , data);
        console.log('A variável que preenchemos', this.clientes);   
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      }
      */ 
    );
  }

  private setTotalClientes(){
    this.clienteServ.getTotalClientes()
    .subscribe(
      (data) => {
        this.totalClientes = data;
        //console.log(this.totalClientes);
      }
    );
  }

}
