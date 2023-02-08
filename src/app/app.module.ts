import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfessionService } from './profession.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProfessionsComponent } from './show-professions/show-professions.component';
import { AddEditProfessionsComponent } from './add-edit-professions/add-edit-professions.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowProfessionsComponent,
    AddEditProfessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProfessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
