import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';

@Component({
  selector: 'visitor-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input("data") visitor:Visitor;

  title:string;

  constructor() { 
    //console.log("Constructor executed", this.visitor)
    //this.title="Hello " + this.visitor.name;
  }

  ngOnInit(): void {
    //console.log("OnInit executed",  this.visitor)
    //this.title="Hello "+ this.visitor.name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("Onchanges executed", changes);
    
  }
}
