import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../../shared/models/Card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() headerSize: number = 130;
  @Input() data: Card = new Card(
    'Asterious',
    'Angular / Firebase / CSS',
    'https://danils123.github.io/spaceTravel/#/',
    ['asterius-2.jpg', 'asterius-1.jpg'],
    'Application in order to show scroll effects and a preloading.',
    ['Angular', 'Firebase', 'Css', 'Angular Material']
  );
  constructor() {}

  ngOnInit(): void {}
}
