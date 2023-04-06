import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient 
  ) { }


  public getCatData(): Observable<any> { 
    // Calling another API
    return this.http.get('https://catfact.ninja/fact'); 
    } 
}
