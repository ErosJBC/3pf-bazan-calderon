import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from '../../models/infocard.model';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  @Input() info: InfoCard

  constructor() { }

  ngOnInit(): void {
  }

}
