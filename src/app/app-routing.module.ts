import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "pedidos", component: PedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
