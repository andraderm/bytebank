import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  public valor: number;
  public destino: number;

  constructor(private transferenciaService: TransferenciasService, private router: Router) { }

  ngOnInit() {
    this.valor = 0;
    this.destino = 0
  }

  public transferir(): void {
    this.transferenciaService.adicionar({ valor: this.valor, destino: this.destino }).subscribe(resultado => {
      this.limpar();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));
  }

  private limpar(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
