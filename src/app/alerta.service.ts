import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AlertaService {
  constructor() {}

  public alerta(mensagem, tipo, reload) {
    return Swal.fire({
        icon: tipo,
        title: mensagem,
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      }).then((result) => {
        if (reload) {
          window.location.reload();
        }
      });
  }
}
