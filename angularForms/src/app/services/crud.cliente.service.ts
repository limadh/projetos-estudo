import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})

export class CrudClienteService {

    constructor(private http: HttpClient) { }

    public novoCliente(cliente: ClienteModel):Observable<any>{
        return this.http.post('http://localhost:8080/cliente/', cliente);
    }

    public upCliente(cliente: ClienteModel):Observable<any>{
        return this.http.put('http://localhost:8080/cliente/', cliente);
    }

    public deleteCliente(id: number){
        return this.http.delete('http://localhost:8080/cliente/' + id);
    }

    public getClientes():Observable<any>{
        return this.http.get<ClienteModel[]>('http://localhost:8080/cliente/todos');
    }

    public getPageClientes(page, size: number):Observable<any>{
        return this.http.get<ClienteModel[]>('http://localhost:8080/cliente?page='+page+'&size='+size);
    }

    public getClienteById(id: number):Observable<any>{
        return this.http.get<ClienteModel[]>('http://localhost:8080/cliente/' + id);
    }

    public getTotalClientes():Observable<any>{
        return this.http.get('http://localhost:8080/cliente/total');
    }

}