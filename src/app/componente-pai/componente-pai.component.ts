import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css'],
})
export class ComponentePaiComponent {
  dadosPai = 'Ola eu sou o dados do componente pai';
}
