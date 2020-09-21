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

  // public config: SwiperOptions = {
  //   initialSlide: 3, // Slide Index Starting from 0
  //   slidesPerView: 3, // Slides Visible in Single View Default is 1
  //   spaceBetween: 30, // Space between each Item
  // };
  constructor() {}

  ngOnInit(): void {}
}
