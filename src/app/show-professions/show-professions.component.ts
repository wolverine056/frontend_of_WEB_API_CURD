import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ProfessionService } from '../profession.service';


@Component({
  selector: 'app-show-professions',
  templateUrl: './show-professions.component.html',
  styleUrls: ['./show-professions.component.scss']
})
export class ShowProfessionsComponent implements OnInit {

  ProfessionList$!:Observable<any[]>;
  ProfessiontypeList$!:Observable<any[]>;
  ProfessiontypeList:any=[];
  //for addmodel
  Modaltitle:string="";
  activatedAddEditProfession:boolean=false;
  professionx:any;
  //map to display data associated with foregin key
  ProfessionMap:Map<number,string>=new Map()

  constructor(private service:ProfessionService) { }

  ngOnInit(): void {
    this.ProfessionList$=this.service.getProfessionList();
    this.ProfessiontypeList$=this.service.getTypeOfProfession();
    this.refreshProfessionMap();
  }
  refreshProfessionMap(){
    this.service.getTypeOfProfession().subscribe(data=>{
      this.ProfessiontypeList=data;
      for(let i=0; i<data.length; i++)
      {
          this.ProfessionMap.set(this.ProfessiontypeList[i].id,
            this.ProfessiontypeList[i].profession);
      }
    })
  }
  addmodal(){
    this.professionx={
    id: 0,
    name:null,
    experience: 0,
    status: null,
    professionId: 0,
    typeOfProfession: null
    }
    this.Modaltitle="Add Profession"
    this.activatedAddEditProfession=true;
  }
  closemodal(){
    this.activatedAddEditProfession=false;
    this.ProfessionList$=this.service.getProfessionList();
  }
  modaledit(data:any){
    this.professionx=data;
    this.Modaltitle="Edit Profession"
    this.activatedAddEditProfession=true;
  }
  Delete(data:any){
    if(confirm(`Are you sure wnat to delete - ${data.name} - details`)){
      this.service.deleteProfession(data.id).subscribe(res =>{
        var closebtn=document.getElementById('add-edit-modal-close');
        if (closebtn){
           closebtn.click();
        }
        var showDeleteSuccess=document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display="block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display="none"
          }
        },4000);
      })
      this.ProfessionList$=this.service.getProfessionList();
    }
  }
}
