import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessionService } from '../profession.service';

@Component({
  selector: 'app-add-edit-professions',
  templateUrl: './add-edit-professions.component.html',
  styleUrls: ['./add-edit-professions.component.scss']
})
export class AddEditProfessionsComponent implements OnInit {

  professionlist$!:Observable<any[]>;
  professiontype$!:Observable<any[]>;
  statuslist$!:Observable<any[]>;

  constructor(private service:ProfessionService) { }

  @Input()professionz:any;
  id:number=0;
  status:string="";
  name:string="";
  experience:number=0;
  professionId!:number;


  ngOnInit(): void {
    this.id=this.professionz.id;
    this.status=this.professionz.status;
    this.name=this.professionz.name;
    this.experience=this.professionz.experience;
    this.professionId=this.professionz.professionId;
    this.professionlist$=this.service.getProfessionList();
    this.professiontype$=this.service.getTypeOfProfession();
    this.statuslist$=this.service.getStatus();
  }
  addprofession(){
    var profession={
      name:this.name,
      professionId:this.professionId,
      status:this.status,
      experience:this.experience
    }
    this.service.AddProfession(profession).subscribe(res =>{
      var closebtn=document.getElementById('add-edit-modal-close');
      if (closebtn){
         closebtn.click();
      }
      var showAddSuccess=document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display="block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none"
        }
      },4000);
    })
  }
  updateProfession(){
    var profession={
      id:this.id,
      name:this.name,
      professionId:this.professionId,
      status:this.status,
      experience:this.experience
    }
    var id:number=this.id;
    this.service.updateProfession(id,profession).subscribe(res =>{
      var closebtn=document.getElementById('add-edit-modal-close');
      if (closebtn){
         closebtn.click();
      }
      var showUpdateSuccess=document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display="block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display="none"
        }
      },4000);
    })
  }
}
