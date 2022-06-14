import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card = new Card()

  // contentCard = {
  //   title: 'Card',
  //   paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aut ipsum inventore optio hic quia nisi, ratione asperiores amet nesciunt quos non, minima expedita cumque, esse consequatur suscipit odit aliquid.'
  // }

  constructor() { 
    // this.contentCard
  }

  ngOnInit(): void {
  }

}
