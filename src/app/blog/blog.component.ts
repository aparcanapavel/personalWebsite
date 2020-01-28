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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog=[];
  public sectionBreak = "";

  constructor(private route:ActivatedRoute, private _setHeaders : AppComponent, private _contactDataService: ConfigService) {
    // sets the header to the portfolio background
    this._setHeaders.contactClick()
  }

  ngOnInit() {
    // takes a snapshot from the URL
    let id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.getBlogById(id);
  }
  getBlogById(id)
  {
    // grab the data from the JSON
    this._contactDataService.getContactData()
    .subscribe(data => {
      // sends the data and the Id to be computed on SetOptionsData
      this.SetOptionsData(data, id);
    });
  }
  SetOptionsData(data : any, id: any) {
    var article = data['blogs'];
    this.blog = article[id-1];
  }

}
