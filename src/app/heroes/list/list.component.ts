import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Iroman', 'She hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHeroe(): void {
    this.deleteHero = this.heroesNames.pop();
  }


}
