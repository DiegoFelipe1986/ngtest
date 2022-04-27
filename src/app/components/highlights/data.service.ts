import { Injectable } from '@angular/core';
import { ProjectI } from 'src/app/models/Project/project.interface';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'http://localhost:4000/api/projects'
  constructor(private http:HttpClient) { }

  getAllProjects():Observable<ProjectI>{
    return this.http.get<ProjectI>(this.urlApi)
  }
}
