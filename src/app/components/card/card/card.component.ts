import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input () image: string;
  @Input () title: string;
  @Input () status: boolean;
  @Input () description : string;

  constructor() { }

  ngOnInit() {
  }

}
