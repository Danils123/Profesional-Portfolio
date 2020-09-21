import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../../shared/models/Card.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() headerSize: number = 0;
  public asterius: Card;
  public trebol: Card;
  constructor() {}

  ngOnInit(): void {
    this.asterius = new Card(
      'Asterious',
      'Angular / Firebase / CSS',
      'https://danils123.github.io/spaceTravel/#/',
      ['asterius.jpg'],
      'Application in order to show scroll effects and a preloading.'
    );
    this.trebol = new Card(
      'Trebol',
      'Angular / Java / Firebase',
      'https://trebolapp.herokuapp.com/#/',
      ['trebol.jpg'],
      'Application for online sales in real time for small businesses.'
    );
  }
}
