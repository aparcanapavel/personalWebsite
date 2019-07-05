import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigData } from './configData';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _homeURL: any = 'assets/data/home.json';
  private _portfolioURL: any = 'assets/data/portfolio.json';
  private _contactURL: any = "assets/data/contact.json"

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._homeURL);
  }
  getPortfolioData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._portfolioURL);
  }
  getContactData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._contactURL);
  }
}
