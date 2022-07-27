import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "../../service/students.service";



@Component({
  selector: 'app-detail-students',
  templateUrl: './detail-students.component.html',
  styleUrls: ['./detail-students.component.css']
})
export class DetailStudentsComponent implements OnInit {

  students: any;

  constructor(private studentsService:StudentsService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })


  }

  findById(id: any) {
    this.studentsService.getById(id).subscribe((data) => {
      console.log(data);
      this.students = data
    })
  }

}
