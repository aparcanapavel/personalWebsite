import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('xpSwitch', [
      transition(':enter', [
        style({ height: '!', opacity: '0' }),
        animate(350)
      ]),
      transition(':leave', [
        animate(0)
      ])
    ]),
    trigger('bannerSwitch', [
      transition(':enter', [
        style({
          opacity: '0',
          height: '!'
        }),
        animate(100)
      ]),
      transition(':leave', [
        style({
          opacity: '1',
          position: 'absolute',
          height: '!'
        }),
        animate(10)
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  public projects = [];
  // switch for the skills and volunteer
  public xp = "";
  public banners = ""
  constructor(private _setHeaders: AppComponent, private _portfolioDataService: ConfigService, private router: Router) {
    // set page Title and page banner to Portfolio
    this._setHeaders.portfolioClick();
    this.banners = "portfolioBanner";
  }

  ngOnInit() {
    this._portfolioDataService.getPortfolioData()
      .subscribe(data => {
      this.SetPortTitles(data);
    });

      this.xp= "skills";
      $("#skillsIcon").addClass("active");
  }

  scrollToProjects() {
    this._setHeaders.scrollToProjects();
  }

  projectClicked(){
    this.banners = "projectBanner";
  }

  SetPortTitles(data : any) {
    // set portfolio data to portTitles
   this.projects = data['projects'];
   // console.log(this.cinemaData);
  }
  setXP(xp, e)
  {
    this.xp = xp;
    var target = e.target || e.srcElement || e.currentTarget;
    var targetID = target.id;
    $("#skillsIcon, #volIcon").removeClass("active");
    $("#"+targetID).addClass("active");
  }
}
