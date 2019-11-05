import { Component, OnInit } from "@angular/core";
import { IProduto } from "./produtos";
import { ProdutoService } from "./produto.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "gp-produtos",
  templateUrl: "./lista-produtos.component.html",
  styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit {
  tituloPagina: string = "Lista de Produtos";
  larguraImagem: number = 50;
  margemImagem: number = 2;
  exibirImagem: boolean = false;
  produtosFiltrados: IProduto[];
  _filtroLista: string;

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(valor: string) {
    this._filtroLista = valor;
    this.produtosFiltrados = this.filtroLista
      ? this.executarFiltro(this.filtroLista)
      : this.produtos;
  }
  produtos: IProduto[] = [];

  constructor(private produtoService: ProdutoService) {}

  alternarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  ngOnInit() {
    console.log("Passei por aqui");
    this.produtos = this.produtoService.getProdutos();
    this.produtosFiltrados = this.produtos;
    // Configura o valor inicial do filtro
    this.filtroLista = "carrinho";
  }

  executarFiltro(filtrarPor: string): IProduto[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.produtos.filter(
      (produto: IProduto) =>
        produto.nomeProduto.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  onRatingClicado(mensagem: string): void {
    this.tituloPagina = "Lista de Produtos - " + mensagem;
  }
}
