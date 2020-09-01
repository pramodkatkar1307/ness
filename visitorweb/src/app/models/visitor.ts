export interface Visitor {
    id?:number;
    name:string;
    entryTime:Date;
    exitTime?:Date;
    email?:string;
    mobile:string;
    toMeet:string;
}
