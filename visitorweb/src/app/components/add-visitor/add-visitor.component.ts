import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  visitor: Visitor;

  constructor(private visitorSvc:VisitorService, private router:Router) {
    this.visitor = {
      name: "",
      mobile: "",
      email: "",
      entryTime: undefined,      
      toMeet: ""
    }
  }

  ngOnInit(): void {
  }

  save(form):void{
    if(form.valid){
      this.visitorSvc.addVisitor(this.visitor)
        .subscribe(
          res=>{
            this.router.navigate(['/']);
          },
          err=> console.log(err)
        )
      
    }else{
      console.log("Form is invalid");
    }
  }
}
