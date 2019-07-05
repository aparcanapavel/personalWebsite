import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bannerSwitch', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(350)
      ]),
      transition(':leave', [
        animate(100)
      ]),
      // state('*', style({ backgroundColor: 'green' })),
    ]),
    trigger('routeAnimations', [
      transition('1=>2, 1=>4, 2=>4, 3=>4', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      // fade transitions
      transition('2=>3, 4=>5', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ opacity: '0' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.2s', style({ opacity: '0' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.2s', style({ opacity: '0' }))),
        ]),
      ]),
      // going back
      transition('5=>2, 5=>1,4=>3, 4=>2, 4 =>1 ,3=>1, 2=>1', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('3=>2, 5=>4', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ opacity: '0' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.2s', style({ opacity: '0' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.2s', style({ opacity: '0' }))),
        ]),
      ])
    ])
  ]
})
export class AppComponent implements OnInit
{
  pageTitle = "";
  // swich for the banners. Must be 3x7(18in by 42in)
  public banners = "";
  constructor()
  {

  }
  ngOnInit()
  {
    // this.banners= "homeBanner";
    // this.pageTitle = "Home";
  }
  toggleMenu()
  {
    $("#main-menu label, #pages").toggleClass("active");
  }
  homeClick()
  {
    // console.log("home CLicked!");
    this.banners = "homeBanner";
    this.pageTitle = "Home";
    this.removeActive();
    $("#pg1").addClass("active");
  }
  portfolioClick()
  {
    // console.log("portfolio CLicked!");
    this.banners = "portfolioBanner";
    this.pageTitle = "Portfolio";
    this.removeActive();
    $("#pg2").addClass("active");
  }
  contactClick()
  {
    // console.log("contact CLicked!");
    this.banners = "contactBanner";
    this.pageTitle = "Contact";
    this.removeActive();
    $("#pg3").addClass("active");
  }
  setActive(target)
  {
    $("#"+target).addClass("active");
  }

  removeActive()
  {
    $("#main-menu label, #pages").removeClass("active");
    $("#pg1 ,#pg2 ,#pg3").removeClass("active");
  }

  prepareRoute(outlet)
  {
    return outlet.activatedRouteData['depth'];
  }
}
