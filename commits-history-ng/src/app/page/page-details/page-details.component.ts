import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitModel } from 'src/app/model/CommitModel';
import { RepoService } from 'src/app/service/repo.service';

@Component({
  selector: 'page-details',
  templateUrl: './page-details.component.html',
  styles: ['']
})
export class PageDetailsComponent implements OnInit {
  commitId: string = '';
  commit: CommitModel = null;
  loading = false;

  constructor(public route: ActivatedRoute, public repoSrc: RepoService) {
    this.commitId = this.route.snapshot.params['commitId'];
  }

  ngOnInit(): void {
    this.getCommitDetails(this.commitId);
  }

  getCommitDetails(commitId) {
    if (commitId) {
      this.loading = true;
      this.repoSrc.getCommitDetail(commitId).subscribe(
        (response: CommitModel) => {
          this.commit = response;
          console.log(response);
          console.log(JSON.stringify(response));
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

}
