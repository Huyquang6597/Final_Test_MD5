import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ParamMap, Router} from "@angular/router";
import {StudentsService} from "../../service/students.service";

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  });


  // @ts-ignore
  id: any;

  constructor(private httpClient: HttpClient,
              private studentsService: StudentsService,
              // ActivatedRoute lấy dữ liệu trên đường dẫn)
              private router: Router) {
    // @ts-ignore
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getStudents(this.id);
    });
  }

  ngOnInit() {
  }

  private getStudents(id: number){
    return this.studentsService.getById(id).subscribe(data =>{
      this.form = new FormGroup({
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        action: new FormControl(data.action),
      });
    });

  }

  delete(id: number){
    this.studentsService.delete(id).subscribe(() =>{
      alert('Xoá thành công');
      this.router.navigate(['students'])
    }, error => {
      console.log(error);
    });
  }

}
