import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["ironman", "spiderman", "mi amada viuda negra", "mi amada wanda"];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    this.heroesBorrados.push(this.heroes.shift() || '');
  }

}
