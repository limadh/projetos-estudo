import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { Message, MessageService } from 'primeng/api';


import { ClienteModel } from 'src/app/models/cliente.model';
import { CrudClienteService } from 'src/app/services/crud.cliente.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css'],
  providers: [MessageService],
})
export class NovoClienteComponent implements OnInit {

  form: FormGroup;
  msgs: Message[] = [];
  cliente: ClienteModel;
  novoCliente: ClienteModel;
  date: Date;
  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  invalidDates: Array<Date>;
  pt: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private clienteServ: CrudClienteService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nomeCliente: [null, Validators.required],
      emailCliente: [null, [Validators.required, Validators.email]],
      telefoneCliente: [null],
      obsCliente: [null],
      date: [null]
    });
    this.calendarPt();
  }

  onSubmit() {
    /*
    let date = JSON.stringify(this.form.get('date').value);
    date = date.slice(1,11);
    */
    
    if(this.form.invalid){
      this.showError('Os campos devem ser preenchidos corretamente');
      return;
    }

    let datePipe = new DatePipe("en-US");
    let date = datePipe.transform(this.form.get('date').value, 'yyyy-MM-dd');

    this.novoCliente = new ClienteModel();
    this.novoCliente.nomeCliente = this.form.get('nomeCliente').value;
    this.novoCliente.emailCliente = this.form.get('emailCliente').value;
    this.novoCliente.telefoneCliente = this.form.get('telefoneCliente').value;
    this.novoCliente.obsCliente = this.form.get('obsCliente').value;
    this.novoCliente.nascimentoCliente = date;

    console.log(this.novoCliente);
    this.clienteServ.novoCliente(this.novoCliente)
      .subscribe(
        dados => {
          this.cliente = dados;
          console.log(dados);
          this.showSuccess();
          this.resetar();
        },
        (error: any) => this.showError(error.error)
      )
  }

  calendarPt() {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
      dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      today: 'Hoy',
      clear: 'Borrar',
      dateFormat: 'dd/mm/yy'
    };

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Salvo!', detail: 'Cliente cadastrado com sucesso.' });
  }

  showError(erromsg) {
    this.msgs = [];
    this.msgs.push(
      {
        severity: 'error', summary: 'Cadastro não Realizado: ',
        detail: erromsg
      }
    );
  }

  resetar() {
    this.form.reset();
  }

}