import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-loading',
  template: `<div class="loading-data">
              {{content}}
            </div>`,
  styles: [`.loading-data {
              font-size: 20px;
              color: #aaa;
              text-align: center;
            }
          `]
})
export class CmpLoadingComponent implements OnInit {
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
    this.content = this.content || 'Loading Data ...';
  }

}
