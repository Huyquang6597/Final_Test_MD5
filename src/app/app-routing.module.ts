import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent} from "./component/list-students/list-students.component";
import {CreateStudentsComponent} from "./component/create-students/create-students.component";
import {EditStudentsComponent} from "./component/edit-students/edit-students.component";
import {DeleteStudentsComponent} from "./component/delete-students/delete-students.component";

const routes: Routes = [
  {
    path: 'students',
    component: ListStudentsComponent
  },
  {
    path: 'students/create',
    component: CreateStudentsComponent
  },
  {
    path: 'edit/:id',
    component: EditStudentsComponent
  },
  {
    path: 'delete/:id',
    component: DeleteStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
