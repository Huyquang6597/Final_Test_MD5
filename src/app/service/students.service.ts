import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Students} from "../model/students";


const API_URL = environment.apiUrl + '/students';
@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<Students[]>{
    // @ts-ignore
    return this.http.get(API_URL)
  }

  save(student:Students): Observable<any> {
    return this.http.post(API_URL,student)
  }
  getById(id: any): Observable<Students> {
    return this.http.get<Students>(API_URL + `/${id}`);
  }
  edit(id: number, student: Students): Observable<Students> {
    return this.http.put<Students>(`${API_URL}/${id}`, student);
  }
  delete(id: number): Observable<Students> {
    return this.http.delete<Students>(API_URL + `/${id}`);
  }
}
