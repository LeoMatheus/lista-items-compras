import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css'],
})
export class Pagina2Component {
  objetos: any[] = [
    { id: 1, nome: 'Item 1', quantidade: 10, preco: 20.0 },
    { id: 2, nome: 'Item 2', quantidade: 5, preco: 15.0 },
    { id: 3, nome: 'Item 3', quantidade: 8, preco: 18.0 },
    // Add more items with unique IDs as needed
  ];
  numero: any | number;
  selectedObjeto: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.numero = params['id'];
      this.selectedObjeto = this.objetos[this.numero - 1];
      console.log(this.numero);
      console.log(this.selectedObjeto);
    });
  }
}
