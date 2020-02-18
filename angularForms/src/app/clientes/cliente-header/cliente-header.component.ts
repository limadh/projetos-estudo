import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

import { ClienteModel } from 'src/app/models/cliente.model';
import { CrudClienteService } from 'src/app/services/crud.cliente.service';

@Component({
  selector: 'app-cliente-header',
  templateUrl: './cliente-header.component.html',
  styleUrls: ['./cliente-header.component.css']
})
export class ClienteHeaderComponent implements OnInit {

  items: MenuItem[];
  cliente : ClienteModel[];

  constructor(
    private http: HttpClient,
    private clienteServ: CrudClienteService,
  ) { }

  ngOnInit() {

    this.items = [      
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-search',        
        items: [
            { label: 'Listar', icon: 'pi pi-fw pi-refresh', routerLink: '/clientes' },
            { label: 'Novo Cliente', icon: 'pi pi-fw pi-plus', routerLink: '/clientes/novo' }
        ]
      }
    ]
  }

  private buscaCliente(pesquisa: String){
    
  }


}
