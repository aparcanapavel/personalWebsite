import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
      ]),
      // state('*', style({ backgroundColor: 'green' })),
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  public projects = [];
  // switch for the skills and volunteer
  public xp = "";

  constructor(private _setHeaders : AppComponent, private _portfolioDataService: ConfigService) {
    // set page Title and page banner to Portfolio
    this._setHeaders.portfolioClick();
  }

  ngOnInit() {
    this._portfolioDataService.getPortfolioData()
      .subscribe(data => {
      this.SetPortTitles(data);
    });

      this.xp= "skills";
      $("#skillsIcon").addClass("active");
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
    // console.log(targetID);
    $("#skillsIcon, #volIcon").removeClass("active");
    $("#"+targetID).addClass("active");
  }
}
