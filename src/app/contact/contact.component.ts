import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactData = [];
  public blogs = [];

  constructor(private _setHeaders : AppComponent, private _contactDataService: ConfigService) {
      this._setHeaders.contactClick();
  }

  ngOnInit() {
    this._contactDataService.getContactData()
      .subscribe(data => {
      this.SetPortTitles(data);
    });

  }
  SetPortTitles(data : any) {
    // set portfolio data to portTitles
   this.contactData = data.contact[0];
   // console.log(this.cinemaData);
   this.blogs = data['blogs'];
  }

}
