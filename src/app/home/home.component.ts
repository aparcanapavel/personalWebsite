import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('hobbySwitch', [
      transition(':enter', [
        style({ height: '!', opacity: '0' }),
        animate(350)
      ]),
      transition(':leave', [
        animate(0)
      ]),
      // state('*', style({ backgroundColor: 'green' })),
    ])
  ]
})
export class HomeComponent implements OnInit {

  public myInterests= "";
  public aboutMe = [];
  public hikingData = [];
  public photoData=[];
  public cinemaData=[];

  constructor(private _setHeaders : AppComponent, private _homeDataService: ConfigService) {
    // set page title and page banner to Home
    this._setHeaders.homeClick();
  }

  ngOnInit() {
    // set my interest switch to something by default
    // retrieves the data from the json
    this._homeDataService.getHomeData()
      .subscribe(data => {
        this.hikingData = data['hike'];
      this.SetPortTitles(data);
    });
    // set interests active tab
    this.myInterests= "photography";
    $("#photoIcon").addClass("active");
    // sets active to current page-- home --
    var elemID = "pg1";
    this._setHeaders.removeActive();
    this._setHeaders.setActive(elemID);
  }

  SetPortTitles(data : any) {
    // set portfolio data to portTitles
   this.aboutMe = data;
   this.hikingData = data.hike[0];
   this.photoData = data.photography[0];
   this.cinemaData = data.cinematography[0];
   // console.log(this.cinemaData);
  }

  setHobby(interest, e)
  {
    this.myInterests = interest;
    var target = e.target || e.srcElement || e.currentTarget;
    var targetID = target.id;
    // console.log(targetID);
    $("#hikeIcon, #photoIcon, #videoIcon").removeClass("active");
    $("#"+targetID).addClass("active");
    // this.setActiveHobby(targetID);
  }
  setActiveHobby(target)
  {
    $("#"+target).addClass("active");
  }
}
