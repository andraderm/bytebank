import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  private listaTransferencias: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencias = [];
  }

  public get transferencias() {
    return this.listaTransferencias;
  }

  public adicionar(transferencia: any): Observable<Transferencia> {
    this.incluirData(transferencia);
    
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  public retornarTodas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private incluirData(transferencia: any): void {
    transferencia.data = new Date();
  }
}
