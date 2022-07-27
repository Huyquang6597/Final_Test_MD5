import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentsComponent } from './component/create-students/create-students.component';
import { EditStudentsComponent } from './component/edit-students/edit-students.component';
import { DeleteStudentsComponent } from './component/delete-students/delete-students.component';
import { ListStudentsComponent } from './component/list-students/list-students.component';
import { NavbarComponent } from './component/blocks/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailStudentsComponent } from './component/detail-students/detail-students.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentsComponent,
    EditStudentsComponent,
    DeleteStudentsComponent,
    ListStudentsComponent,
    NavbarComponent,
    DetailStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
