import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Card } from '../../../../../shared/models/Card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private state$: Observable<object>;
  headerSize: number = 130;
  data: Card = new Card(
    'Asterious',
    'Angular / Firebase / CSS',
    'https://danils123.github.io/spaceTravel/#/',
    ['asterius-2.jpg', 'asterius-1.jpg'],
    'Application in order to show scroll effects and a preloading.',
    ['Angular', 'Firebase', 'Css', 'Angular Material']
  );
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.state$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    );
    this.state$.subscribe((x) => console.log(x));
  }
}
