import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProdutoModel } from "../model/produto.model";
import { Observable, firstValueFrom } from "rxjs";

@Injectable()
export class ProdutoGateway {

    constructor(private httpClient: HttpClient) { //Onde injeto outro serviço nele | Chamada HTTP no CLiente

    }

    async getProdutos(): Promise<ProdutoModel[]> { // Promise é uma promessa de resultado, o resultado não é imediato. Não fica esperando uma resposta de um array de produtos.

        const headers = new HttpHeaders({
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AZ21haWwuY29tIiwicGFzc3dvcmQiOiJmNzMyZGZkYmQwYWVkNjI3MjdmOTU4Y2NjY2E5ZWMzYTVjYjEzZWRhIiwiaWF0IjoxNjk2MDUwMTM3LCJleHAiOjE2OTYwNTM3Mzd9.Gw-Wzd4cXDMGbJb4LJDtcAySccx41_DmOhLUFvxMkHY",
        });

        const observable: Observable<ProdutoModel[]> = this.httpClient.get<ProdutoModel[]>("http://localhost:8081/produtos", { //O Observable é uma espectativa da lista de produtos na chamada http. No casso ele recebe o array da ProdutoModel .
            headers
        });

        const data = await firstValueFrom<ProdutoModel[]>(observable);

        return data;

    }

}

