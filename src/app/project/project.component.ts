import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  noPause = false;
  public fullProject = [];

  constructor(private route:ActivatedRoute, private _setHeaders : AppComponent, private _projectDataService: ConfigService) {
    // sets the header to the portfolio background
    this._setHeaders.projectClick();
    // sets the title to projects
 }

  ngOnInit() {
    // takes a snapshot from the URL
    let id = +this.route.snapshot.paramMap.get('id');
    this.getProjectById(id);
  }

  scrollToProjects() {
    this._setHeaders.scrollToProjects();
  }
  
  getProjectById(id)
  {
    // grab the data from the JSON
    this._projectDataService.getPortfolioData()
    .subscribe(data => {
      // sends the data and the Id to be computed on SetOptionsData
      this.SetOptionsData(data, id);
    });
  }
  SetOptionsData(data : any, id: any) {
    // gets the blog objects and computes it accordingly to the array number.
   var project = data['projects'];
   this.fullProject = project[id-1];
  }

}
