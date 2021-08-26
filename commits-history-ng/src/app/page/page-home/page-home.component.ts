import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RepoService } from 'src/app/service/repo.service';
import { DateRangeModel } from 'src/app/model/DateRange';
import { CommitModel } from 'src/app/model/CommitModel';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  dateRange = new FormGroup({
    since: new FormControl(),
    until: new FormControl()
  });
  fetchedCommits: Array<CommitModel> = [];
  loading = false;

  constructor(public repoSrc: RepoService) { }

  ngOnInit(): void {
    this.dateRange.valueChanges.subscribe(this.dateRangeChange.bind(this));
    console.log(this.fetchedCommits);
  }

  dateRangeChange(range: DateRangeModel) {
    if (range.since && range.until) {
      this.fetchCommits(range);
    }
  }

  fetchCommits({ since, until }: DateRangeModel) {
    this.loading = true;
    this.repoSrc.getCommitsInDateRange({ since, until }).subscribe(
      (response: Array<CommitModel>) => {
        console.log(JSON.stringify(response));
        console.log(response);
        this.fetchedCommits = response || [];
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.loading = false;
      }
    );
  }

}
