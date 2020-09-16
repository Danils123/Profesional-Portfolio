import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/Card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: Card;
  public displayModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
