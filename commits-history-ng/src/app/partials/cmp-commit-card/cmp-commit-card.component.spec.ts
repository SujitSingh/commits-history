import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCommitCardComponent } from './cmp-commit-card.component';

describe('CmpCommitCardComponent', () => {
  let component: CmpCommitCardComponent;
  let fixture: ComponentFixture<CmpCommitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpCommitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCommitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
