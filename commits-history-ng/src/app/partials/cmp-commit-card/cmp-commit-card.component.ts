import { Component, Input, OnInit } from '@angular/core';
import { CommitModel } from 'src/app/model/CommitModel';

@Component({
  selector: 'cmp-commit-card',
  templateUrl: './cmp-commit-card.component.html',
  styleUrls: ['./cmp-commit-card.component.scss']
})
export class CmpCommitCardComponent implements OnInit {

  @Input() commit: CommitModel = null;
  @Input() detailsView: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.commit);
    console.log(this.detailsView);
  }

}
