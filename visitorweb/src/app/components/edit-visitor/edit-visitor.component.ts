import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {

  visitorForm:FormGroup;

  constructor(private route:ActivatedRoute, 
    private visitorSvc:VisitorService, private router:Router) {

  }

  ngOnInit(): void {
    let data= this.route.snapshot.data["visitor"];
    this.visitorForm=new FormGroup({
      id:new FormControl(data.id),
      name:new FormControl(data.name, Validators.compose([Validators.required, Validators.minLength(3)])),
      mobile: new FormControl(data.mobile, Validators.required),
      email:new FormControl(data.email),
      entryTime:new FormControl(data.entryTime, Validators.required),
      exitTime:new FormControl(data.exitTime),
      toMeet:new FormControl(data.toMeet, Validators.required)
    })
  }

  
  public get id() : AbstractControl {
    return this.visitorForm.controls["id"];
  }
  public get name() : AbstractControl {
    return this.visitorForm.controls["name"];
  }
  public get email() : AbstractControl {
    return this.visitorForm.controls["email"];
  }
  public get mobile() : AbstractControl {
    return this.visitorForm.controls["mobile"];
  }
  public get entryTime() : AbstractControl {
    return this.visitorForm.controls["entryTime"];
  }
  public get exitTime() : AbstractControl {
    return this.visitorForm.controls["exitTime"];
  }
  public get toMeet() : AbstractControl {
    return this.visitorForm.controls["toMeet"];
  }

  update(){
    if(this.visitorForm.valid){
      this.visitorSvc.updateVisitor(this.visitorForm.value)
      .subscribe(
        data=> this.router.navigate(['/']),
        err=>console.log(err)
      )
    }else{
      alert("Invalid form data");
    }
  }
}
