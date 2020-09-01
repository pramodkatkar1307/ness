import { Injectable } from '@angular/core';
import { Visitor } from '../models/visitor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  readonly HTTP_BASE_URL:string="http://localhost:3000/visitors";

  constructor(private http:HttpClient) {
  }

  public getVisitors():Observable<Visitor[]>{
      return this.http.get<Visitor[]>(this.HTTP_BASE_URL);
  }

  public addVisitor(visitor:Visitor):Observable<any>{
      return this.http.post<any>(this.HTTP_BASE_URL,visitor)
  }

  public getVisitorById(id:number):Observable<Visitor>{
    return this.http.get<Visitor>(`${this.HTTP_BASE_URL}/${id}`);
  }

  public updateVisitor(visitor:Visitor):Observable<any>{
    return this.http.put<any>(`${this.HTTP_BASE_URL}/${visitor.id}`, visitor);
  }
}
