import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {StudentsService} from "../../../service/students.service";
import {Router} from "@angular/router";
import {Students} from "../../../model/students";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  students: Students[] = [];
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  })

  // form = new FormGroup({
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   category: new FormControl(''),
  // })

  constructor(private httpClient: HttpClient,
              private studentsService: StudentsService,
              private router: Router) {
  }

  listStudents: any;
  obj: any;
  id: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentsService.findAll().subscribe((data) => {
      console.log(data)
      this.listStudents = data;
    }, error => {
      console.log(error)
    })
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
