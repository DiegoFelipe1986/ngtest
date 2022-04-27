import { Component, NgIterable, OnInit } from '@angular/core';
import { DataService } from 'src/app/components/highlights/data.service';
import { ProjectI } from '../../models/Project/project.interface';


@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  projects:ProjectI | NgIterable<any> | undefined ;

  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {



    this.dataSvc.getAllProjects().subscribe(data => {
      (this.projects = data)
    });
  }

}
