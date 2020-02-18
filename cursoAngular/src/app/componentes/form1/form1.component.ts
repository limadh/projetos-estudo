import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  cliente: Cliente;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

  novoCliente(){
    
  }

}
