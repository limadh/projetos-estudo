import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { logging, Button, element } from 'protractor';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { Message, MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ClienteModel } from 'src/app/models/cliente.model';
import { CrudClienteService } from 'src/app/services/crud.cliente.service';
import { isDate } from 'util';
import { empty } from 'rxjs';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class EditarClienteComponent implements OnInit {

  form: FormGroup;
  msgs: Message[] = [];
  private idCliente: number;
  cliente : ClienteModel[];
  private mensagem: string;
  isApresentarBotao: boolean = true;
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
    private clienteServ: CrudClienteService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) 
  { this.route.params.subscribe(params => this.idCliente = params['id']); }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nomeCliente: [null],
      emailCliente: [null],
      telefoneCliente: [null],
      obsCliente: [null],
      date: [null]
    });

    this.getter();
    this.calendarPt();
  }

  onSubmit(){
    
    if(this.form.invalid){
      this.showError('Os campos devem ser preenchidos corretamente');
      return;
    }    
    
    let datePipe = new DatePipe("en-US");
    let date = datePipe.transform(this.form.get('date').value, 'yyyy-MM-dd');     

    this.novoCliente = new ClienteModel();
    this.novoCliente.id = this.form.get('id').value;
    this.novoCliente.nomeCliente = this.form.get('nomeCliente').value;
    this.novoCliente.emailCliente = this.form.get('emailCliente').value;
    this.novoCliente.telefoneCliente = this.form.get('telefoneCliente').value;
    this.novoCliente.obsCliente = this.form.get('obsCliente').value;
    this.novoCliente.nascimentoCliente = date;

    console.log(this.novoCliente);
    this.clienteServ.upCliente(this.novoCliente)
    .subscribe(
      dados => {
        console.log(dados);
        this.mensagem = 'Cliente salvo com sucesso!';
        this.showSuccess();
      },
      (error: any) => this.showError('erro')
    )

    /*
    this.resetar();
    this.getter();
    this.calendarPt();
    */
   this.ngOnInit();
  }

  getter(){
    this.clienteServ.getClienteById(this.idCliente)
    .subscribe(dados => this.populaForm(dados));  
  }

  populaForm(dados: any){

    let dataNasc: Date;

    if(dados.nascimentoCliente){
      let parts = dados.nascimentoCliente.split("-");
      dataNasc = new Date(parts[0], parts[1] - 1, parts[2]);
    }  

    this.form = this.formBuilder.group({
      id: [dados.id],
      nomeCliente: [dados.nomeCliente, Validators.required],
      emailCliente: [dados.emailCliente, [Validators.required, Validators.email]],
      telefoneCliente: [dados.telefoneCliente],
      obsCliente: [dados.obsCliente],
      date: [dataNasc]
    });
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
      dateFormat: 'dd/mm/yyyyy'
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
    this.msgs.push({severity:'success', summary:'Salvo!', detail: this.mensagem});
  }

  showError(erromsg) {
    this.msgs = [];
    this.msgs.push(
      {
        severity:'error', summary:'Algo deu errado, requisição não completada.', 
        detail: erromsg 
      }
    );
  }

  private delete(id: number){
    this.clienteServ.deleteCliente(this.idCliente)
    .subscribe(
      dados => {
        this.form.disable();
        this.mensagem = 'Cliente excluido com sucesso!';
        this.showSuccess();
        this.isApresentarBotao = false;
        
      },
      (error: any) => this.showError('erro')
    )
  }

  confirm(id: number) {
    this.confirmationService.confirm({
        message: 'Tem Certeza que deseja excluir este cliente?',
        accept: () => {          
          this.delete(id);
        }
    });
}

  resetar(){
    this.form.reset();
  }

}
