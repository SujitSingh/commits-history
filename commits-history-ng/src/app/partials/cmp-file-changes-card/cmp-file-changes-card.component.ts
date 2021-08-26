import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-file-changes-card',
  templateUrl: './cmp-file-changes-card.component.html',
  styleUrls: ['./cmp-file-changes-card.component.scss']
})
export class CmpFileChangesCardComponent implements OnInit {
  @Input() file: any = null;

  constructor() { }

  ngOnInit(): void { }

}
