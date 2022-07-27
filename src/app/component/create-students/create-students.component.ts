import { Component, OnInit } from '@angular/core';
import {Students} from "../../model/students";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {StudentsService} from "../../service/students.service";

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  students: Students[] = [];
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  })
  listStudents: any;
  obj: any;
  id: any;
  constructor(private httpClient: HttpClient,
              private router: Router,
              private studentsService: StudentsService) { }

  ngOnInit(): void {
  }
  add() {
    console.log(this.form.value)
    this.obj = {
      name: this.form.value.name,
      description: this.form.value.description,
      action: this.form.value.action,
    }
    this.studentsService.save(this.obj).subscribe((data) => {
      alert("Save Successfully");
      this.obj = data;
      // @ts-ignore
      $('#exampleModal').modal('hide')
      this.router.navigate(['/students'])
    },error => {
      alert("Error")
    })
  }
}
