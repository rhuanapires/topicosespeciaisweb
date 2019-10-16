import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { ConverteParaEspacoPipe } from './shared/converte-para-espaco.pipe';
import { RatingComponent } from './shared/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ListaProdutosOrdemComponent } from './produtos/lista-produtos-ordem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ListaProdutosOrdemComponent,
    ConverteParaEspacoPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
