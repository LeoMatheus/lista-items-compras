import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css'],
})
export class ComponenteFilhoComponent {
  @Input() dados: any;

  @Output() evento = new EventEmitter<String>();

  dispararEvento() {
    this.evento.emit('Evento disparado pelo componente filho');
  }
}
