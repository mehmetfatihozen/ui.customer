import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignJoinComponent } from './campaign-join.component';

describe('CampaignJoinComponent', () => {
  let component: CampaignJoinComponent;
  let fixture: ComponentFixture<CampaignJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
