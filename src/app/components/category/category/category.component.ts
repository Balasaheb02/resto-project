import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input () title: string;
  @Input () image: string;
  @Input () status: boolean;

  constructor() { }

  ngOnInit() {
  }

}
