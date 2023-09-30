import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoItensComponent } from './components/pedido-itens/pedido-itens.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidoService } from './services/pedido.service';
import { MoneyPipe } from './pipes/money.pipe';
import { ProdutoGateway } from './gateway/produto.gateway';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PedidosComponent,
    PedidoComponent,
    PedidoItensComponent,
    ProdutosComponent,
    MoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PedidoService,
    ProdutoGateway,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
