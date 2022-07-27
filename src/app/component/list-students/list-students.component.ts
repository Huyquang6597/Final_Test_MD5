import {Component, OnInit} from '@angular/core';
import {Students} from "../../model/students";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {StudentsService} from "../../service/students.service";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
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
              private studentsService: StudentsService) {
  }

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
  delete(id: number){
    this.studentsService.delete(id).subscribe(() =>{
      alert('Xoá thành công');
      this.router.navigate(['home'])
    }, error => {
      console.log(error);
    });
  }


}
