import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { ConverteParaEspacoPipe } from './shared/converte-para-espaco.pipe';
import { RatingComponent } from './shared/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ConverteParaEspacoPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
