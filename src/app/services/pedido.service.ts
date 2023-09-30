import { Injectable } from "@angular/core";
import { PedidoModel } from "../model/pedido.model";
import { PedidoItemModel } from "../model/pedidoitem.model";
import { ProdutoModel } from "../model/produto.model";
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PedidoService {

  public pedido: PedidoModel = new PedidoModel();
  private baseUrl = 'http://localhost:8081';


  constructor(private httpClient: HttpClient) { }



  adicionarItem(produto: ProdutoModel): void {
    const item: PedidoItemModel | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
    if (item) {
      item.quantidade++;
    } else {
      this.pedido.itens.push(new PedidoItemModel(produto, 1));
    }
    this.pedido.total += Number(produto.preco);
    console.log({ pedido: this.pedido });
    console.log({ total: this.pedido.total });
  }

  removerItem(produto: ProdutoModel): void {
    const item: PedidoItemModel | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
    if (item) {
      item.quantidade--;
      this.pedido.total -= produto.preco;
      if (item.quantidade === 0) {
        this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
      }
    }
    console.log(this.pedido);
    console.log(this.pedido.total);
  }

  enviarPedido(): Observable<any> {

    console.log("Enviando para o backend", { pedido: this.pedido });


    if (!this.pedido.itens.length) {
      return new Observable<any>(observer => {
        observer.error({ message: 'O pedido deve ter pelo menos um item.' });
      });
    }

    const url = `${this.baseUrl}/pedidos`;

    const pedido = {
      itens: this.pedido.itens.map(item => {
        return {
          produto: item.produto.id,
          quantidade: item.quantidade
        }
      })
    }

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AZ21haWwuY29tIiwicGFzc3dvcmQiOiJmNzMyZGZkYmQwYWVkNjI3MjdmOTU4Y2NjY2E5ZWMzYTVjYjEzZWRhIiwiaWF0IjoxNjk2MDUwMTM3LCJleHAiOjE2OTYwNTM3Mzd9.Gw-Wzd4cXDMGbJb4LJDtcAySccx41_DmOhLUFvxMkHY",
    });

    const options = { headers : headers };

    const response = this.httpClient.post(url, pedido, options);
    this.pedido = new PedidoModel();

    return response;
  }

}
