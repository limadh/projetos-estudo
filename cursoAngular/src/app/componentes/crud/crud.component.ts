import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: any;
  erro: any;

  constructor(private crudService: CrudService) { 
    this.getter();
  }

  ngOnInit() {
  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('O data que recebemos ' , data);
        console.log('A variável que preenchemos', this.images);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      }
    );
  }

}
