import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';



import { ClientesRoutingModule } from './clientes.routing';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ClienteHeaderComponent } from './cliente-header/cliente-header.component';
import { ClienteFooterComponent } from './cliente-footer/cliente-footer.component';


@NgModule({
  
    imports: [
      CommonModule,
      HttpClientModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ClientesRoutingModule,
      AccordionModule,
      MenubarModule,
      InputTextModule,
      ButtonModule,
      TabViewModule,
      CodeHighlighterModule,
      MessageModule,
      MessagesModule,
      ConfirmDialogModule,
      CalendarModule,
      ScrollingModule,
      PaginatorModule,
    ],
  
    declarations: [
      ListarClientesComponent,
      NovoClienteComponent,
      EditarClienteComponent,
      ClienteHeaderComponent,
      ClienteFooterComponent,      
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
  })
  export class ClientesModule { }