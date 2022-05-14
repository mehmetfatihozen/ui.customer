import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignExpireListComponent } from './campaign-expire-list.component';

describe('CampaignExpireListComponent', () => {
  let component: CampaignExpireListComponent;
  let fixture: ComponentFixture<CampaignExpireListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignExpireListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignExpireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
