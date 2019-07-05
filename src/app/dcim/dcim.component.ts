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
  selector: 'app-dcim',
  templateUrl: './dcim.component.html',
  styleUrls: ['./dcim.component.css'],
  animations: [
    trigger('DCIMSwitch', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(550)
      ]),
      transition(':leave', [
        animate(0)
      ]),
      // state('*', style({ backgroundColor: 'green' })),
    ])
  ]
})
export class DcimComponent implements OnInit {

  public dcimSwitch = "";

  constructor(private _setHeaders : AppComponent)
  {
    // sets the header to the portfolio background
    this._setHeaders.portfolioClick();
    // sets the title to projects
    this._setHeaders.pageTitle = "DCIM Presentation";
  }

  ngOnInit()
  {
    this.dcimSwitch = "dcimIntro";
    $("#IntroDCIM").addClass("activeSub");
    // $("#subMenu").addClass("slideUpSub");
  }
  activateSwitch(x,e)
  {
    // x is the switch name
    this.dcimSwitch = x;
    // e is the event
    var target = e.target || e.srcElement || e.currentTarget;
    var targetID = target.id;
    // console.log(targetID);
    $("#IntroDCIM, #BrazilDCIM, #JonDCIM, #TrumpJrDCIM, #PresidentDCIM").removeClass("activeSub");
    $("#"+targetID).addClass("activeSub");

    if(targetID === "IntroDCIM")
    {
      $("#subMenu").removeClass("slideUpSub");
    }
    else $("#subMenu").addClass("slideUpSub");
  }

}
