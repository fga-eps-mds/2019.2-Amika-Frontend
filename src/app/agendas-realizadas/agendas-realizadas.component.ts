import {Component, OnDestroy, OnInit} from '@angular/core';
import {Agenda} from "../agendas/agendas.model";
import {AgendaRealizada} from "./agendas-realizadas.model"
import {AgendasRealizadasService} from "./agendas-realizadas.service";
import {Subscription} from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import {AgendasRealizadasDialogComponent} from "./agendas-realizadas-dialog/agendas-realizadas-dialog.component";

@Component({
  selector: 'app-agenda-realizada',
  templateUrl: './agendas-realizadas.component.html',
  styleUrls: ['./agendas-realizadas.component.css']
})
export class AgendasRealizadasComponent implements OnInit, OnDestroy {
  agendasNaoRealizadas: Agenda;
  agendasRealizadas: any;
  realizacao: AgendaRealizada;
  dataAtual: string;

  private subscriptions: Subscription = new Subscription();
  private userId: string = localStorage.getItem('user_id');

  constructor(
    public dialog: MatDialog,
    private agendasRealizadasService: AgendasRealizadasService,
  ) {
    this.subscriptions = new Subscription();
    this.userId = localStorage.getItem('user_id');
    this.realizacao = new AgendaRealizada();
    this.dataAtual = this.formataDataAtual();
  }

  ngOnInit() {
    this.getAgendasNaoRealizadas();
    this.getAgendasRealizadas();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  formataDataAtual(): string {
    const data: Date = new Date();
    return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
  }

  getAgendasNaoRealizadas(): void {
    this.subscriptions.add(this.agendasRealizadasService.agendasNaoRealizadasAluno(this.userId)
      .subscribe((data: any) => {
        this.agendasNaoRealizadas = data;
      })
    );
  }

  getAgendasRealizadas(): void {
    this.subscriptions.add(this.agendasRealizadasService.agendasRealizadasAluno(this.userId)
      .subscribe((data: any) => {
        this.agendasRealizadas = JSON.parse(data);
      })
    );
  }

  openDialog(tipo: string, agenda: any): void {
    let data = {};
    let anexo: File = null;

    switch (tipo) {
      case 'criacao':
        data = {
          tipo,
          agenda,
          realizacao: this.realizacao,
          anexo
        };
        break;
      case 'alteracao':
      case 'delecao':
        data = {
          tipo,
          agenda: agenda.agenda,
          realizacao: agenda.realizacao,
          anexo
        };
        break;
      default:
        break;
    }

    const dialogRef = this.dialog.open(AgendasRealizadasDialogComponent, {data});

    this.subscriptions.add(dialogRef.afterClosed()
      .subscribe((res) => {
        if (res) {
          switch (res.tipo) {
            case 'criacao':
              this.criaAgendaRealizada(res);
              break;
            case 'alteracao':
              this.editaAgendaRealizada(res);
              break;
            case 'delecao':
              this.deletaAgendaRealizada(res);
              break;
            default:
              break;
          }
        }
      })
    );
  }

  criaAgendaRealizada(res) {
    const formData = new FormData();
    formData.append('aluno', localStorage.getItem('user_id'));
    formData.append('agenda', res.agendaId);
    formData.append('texto', res.texto);
    if (res.anexo) {
      formData.append('anexo', res.anexo);
    }

    this.subscriptions.add(this.agendasRealizadasService.adicionaAgendaRealizada(formData)
      .subscribe(() => {
        this.getAgendasNaoRealizadas();
        this.getAgendasRealizadas();
      }, error => {
        console.log(error);
      })
    );
  }

  editaAgendaRealizada(res) {
    const formData = new FormData();
    formData.append('texto', res.texto);
    if (res.anexo) {
      formData.append('anexo', res.anexo);
    }

    this.subscriptions.add(this.agendasRealizadasService.editaAgendaRealizada(res.agendaRealizadaId, formData)
      .subscribe(() => {
        this.getAgendasRealizadas();
      }, error => {
        console.log(error);
      })
    );
  }

  deletaAgendaRealizada(res) {
    this.subscriptions.add(this.agendasRealizadasService.deletaAgendaRealizada(res.agendaRealizadaId)
      .subscribe(() => {
        this.getAgendasRealizadas();
      }, error => {
      console.log(error);
      })
    );
  }
}
