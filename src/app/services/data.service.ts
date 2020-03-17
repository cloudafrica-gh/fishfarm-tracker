import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private f2DataServerUrl: string = environment.f2Server;
  public headers: HttpHeaders;

  constructor( private readonly http: HttpClient) { }

  getAllRegisterUser(): Observable<any> {
    return this.http
      .get(`${this.f2DataServerUrl}/admin/getallusers`)
      .pipe(
        tap(_ => this.log(`dService: get all registered users >>>>`) ),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }
  getAllUserPonds(): Observable<any> {
    return this.http
      .get(`${this.f2DataServerUrl}/admin/getallponds`)
      .pipe(
        tap(_ => this.log(`srv: load all user pond >>>>`) ),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }
  postUserPond(pondData: any): Observable<any> {
    return this.http.post<any>(`${this.f2DataServerUrl}/user/addpond`, pondData)
      .pipe(
        tap(_ => this.log(`add pond srv: post user pond >>>>`) ),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }
  getUserFarmPonds(): Observable<any> {
    return this.http.get(`${this.f2DataServerUrl}/admin/farm/getallponds`)
      .pipe(
        tap(_ => this.log(`srv: load user farm ponds >>>>`) ),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }

  postUserFishPondHealth(pondData: any): Observable<any> {
    console.log('srv: get user fish pond health: ', pondData);
    return this.http.post<any>(`${this.f2DataServerUrl}/admin/pond/fishhealth`, pondData)
      .pipe(
        tap(_ => this.log(`srv: user fish pond health : ${_}`)),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }

  postUserPondProductionData(pondData: any): Observable<any> {
    return this.http.post<any>(this.f2DataServerUrl + '/admin/pond/productiondata', pondData)
      .pipe(
        tap(_ => this.log(`srv: user fish pond production data : ${_}`)),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }
  calculateEconomicIndicator(ecoData: any): Observable<any> {
    return this.http.post<any>(this.f2DataServerUrl + '/admin/farm/economicindicators', ecoData)
      .pipe(
        tap(_ => this.log(`ecoData srv: user economic indicator : ${_}`)),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }

  getAudioRecordings(): Observable<any> {
    return this.http
      .get(`${this.f2DataServerUrl}/admin/audiorecordings`)
      .pipe(
        tap(_ => this.log(`DataService: audio recordings >>>>`) ),
        catchError(this.handleError('FishfarmTracker', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }

}

