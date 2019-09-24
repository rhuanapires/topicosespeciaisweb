import { Component } from '@angular/core';

@Component({
    selector : 'gp-produtos',
    templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent {
    tituloPagina: string = 'Lista de Produtos';
    larguraImagem: number = 50;
    margemImagem: number = 2;
    exibirImagem: boolean = false;
    filtroLista: string = 'carrinho';
    produtos: any[] = 
    [
        {
          "idProduto": 1,
          "nomeProduto": "Leaf Rake",
          "codigoProduto": "GDN-0011",
          "dataLancamento": "March 19, 2019",
          "descricao": "Leaf rake with 48-inch wooden handle.",
          "preco": 19.95,
          "rating": 3.2,
          "urlImagem": "assets/imagens/leaf_rake.png"
        },
        {
          "idProduto": 2,
          "nomeProduto": "Garden Cart",
          "codigoProduto": "GDN-0023",
          "dataLancamento": "March 18, 2019",
          "descricao": "15 gallon capacity rolling garden cart",
          "preco": 32.99,
          "rating": 4.2,
          "urlImagem": "assets/imagens/garden_cart.png"
        },
        {
          "idProduto": 5,
          "nomeProduto": "Hammer",
          "codigoProduto": "TBX-0048",
          "dataLancamento": "May 21, 2019",
          "descricao": "Curved claw steel hammer",
          "preco": 8.9,
          "rating": 4.8,
          "urlImagem": "assets/imagens/hammer.png"
        },
        {
          "idProduto": 8,
          "nomeProduto": "Saw",
          "codigoProduto": "TBX-0022",
          "dataLancamento": "May 15, 2019",
          "descricao": "15-inch steel blade hand saw",
          "preco": 11.55,
          "rating": 3.7,
          "urlImagem": "assets/imagens/saw.png"
        },
        {
          "idProduto": 10,
          "nomeProduto": "Video Game Controller",
          "codigoProduto": "GMG-0042",
          "dataLancamento": "October 15, 2018",
          "descricao": "Standard two-button video game controller",
          "preco": 35.95,
          "rating": 4.6,
          "urlImagem": "assets/imagens/xbox-controller.png"
        }
    ]

    alternarImagem(): void {
      this.exibirImagem = !this.exibirImagem;
    }
}