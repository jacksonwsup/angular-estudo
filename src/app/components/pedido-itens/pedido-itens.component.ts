import { Component } from '@angular/core';
import { PedidoItemModel } from 'src/app/model/pedidoitem.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-itens',
  templateUrl: './pedido-itens.component.html',
  styleUrls: ['./pedido-itens.component.css']
})
export class PedidoItensComponent {

  constructor(private pedidoService: PedidoService) { }

  get pedido() {
    return this.pedidoService.pedido;
  }

  removerItem(item: PedidoItemModel) {
    this.pedidoService.removerItem(item.produto);
  }

  enviarPedido() {
    this.pedidoService.enviarPedido().subscribe(response => {
      console.log(response);
    });
  }

}
