import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visitors:Observable<Visitor[]>;

  constructor(private visiorSvc:VisitorService) { 
  }

  ngOnInit(): void {
    this.visitors=  this.visiorSvc.getVisitors();  
  }
}
