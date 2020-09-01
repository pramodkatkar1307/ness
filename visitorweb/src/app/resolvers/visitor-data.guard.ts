import { Injectable } from '@angular/core';
import {  Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Visitor } from '../models/visitor';
import { Observable } from 'rxjs';
import { VisitorService } from '../services/visitor.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorDataGuard implements Resolve<Visitor>{

  constructor(private visitorSvc:VisitorService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Visitor | Observable<Visitor> | Promise<Visitor> {
      let id = route.params["id"];
      return this.visitorSvc.getVisitorById(id);
  }
  
}
