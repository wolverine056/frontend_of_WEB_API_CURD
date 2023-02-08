import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  readonly APIlink="https://localhost:7114/api"

  constructor(private http:HttpClient) { }

  //http methods for artists controller
  getProfessionList():Observable<any[]>
  {
    return this.http.get<any>(this.APIlink+'/Artists');
  }
  AddProfession(data:any)
  {
    return this.http.post(this.APIlink+'/Artists',data);
  }
  updateProfession(Id:number|string,data:any)
  {
    return this.http.put(this.APIlink+`/Artists/${Id}`,data);
  }
  deleteProfession(Id:number|string){
    return this.http.delete(this.APIlink+`/Artists/${Id}`);
  }

  //http methods for type of professions controller
  getTypeOfProfession():Observable<any[]>
  {
    return this.http.get<any>(this.APIlink+'/TypeOfProfessions');
  }

  AddTypeOfProfession(data:any)
  {
    return this.http.post(this.APIlink+"/TypeOfProfessions",data);
  }
  updateTypeOfProfession(Id:number|string,data:any)
  {
    return this.http.put(this.APIlink+`/TypeOfProfessions/${Id}`,data);
  }
  deleteTypeOfProfession(Id:number|string){
    return this.http.delete(this.APIlink+`/TypeOfProfessions/${Id}`);
  }

  //http methods for status controller
  getStatus():Observable<any[]>
  {
    return this.http.get<any>(this.APIlink+'/Status');
  }

  AddStatus(data:any)
  {
    return this.http.post(this.APIlink+"/Status",data);
  }
  updateStatus(Id:number|string,data:any)
  {
    return this.http.put(this.APIlink+`/Status/${Id}`,data);
  }
  deleteStatus(Id:number|string){
    return this.http.delete(this.APIlink+`/Status/${Id}`);
  }
}
