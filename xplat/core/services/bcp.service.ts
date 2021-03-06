import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agency } from 'xplat/core/models';

@Injectable()
export class BcpService {
  constructor(private http: HttpClient) { }

  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${environment.backend}/agencias`);
  }

  getAgencyById(id: number): Observable<Agency> {
    return this.http.get<Agency>(`${environment.backend}/agencias/${id}`);
  }

  editAgencyById(id: number, agency: Agency): Observable<Agency> {
    return this.http.put<Agency>(`${environment.backend}/agencias/${id}`, agency);
  }
}
