import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFileChangesCardComponent } from './cmp-file-changes-card.component';

describe('CmpFileChangesCardComponent', () => {
  let component: CmpFileChangesCardComponent;
  let fixture: ComponentFixture<CmpFileChangesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpFileChangesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFileChangesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
