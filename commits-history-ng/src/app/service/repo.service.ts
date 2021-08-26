import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateRangeModel } from 'src/app/model/DateRange';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repoCommitsAPIPath = 'https://api.github.com/repos/nodejs/node/commits';

  constructor(private http: HttpClient) { }

  getCommitsInDateRange({ since, until }: DateRangeModel): Observable<any> {
    return this.http.get(this.repoCommitsAPIPath, {
      params: { since, until }
    });
  }

  getCommitDetail(commitId: string): Observable<any> {
    return this.http.get(`${this.repoCommitsAPIPath}/${commitId}`);
  }
}
