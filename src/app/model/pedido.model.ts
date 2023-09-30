import { PedidoItemModel } from "./pedidoitem.model";

export class PedidoModel {

    public itens: PedidoItemModel[];

    public total: number;

    constructor(itens: PedidoItemModel[] = [],
        total: number = 0) {

        this.itens = itens;

        this.total = total;

    }

}