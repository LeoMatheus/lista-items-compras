import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component {
  constructor(private router: Router) {}

  navegarParaPagina2Produto1() {
    this.router.navigate(['/pagina2', 1]);
  }

  navegarParaPagina2Produto2() {
    this.router.navigate(['/pagina2', 2]);
  }
}
