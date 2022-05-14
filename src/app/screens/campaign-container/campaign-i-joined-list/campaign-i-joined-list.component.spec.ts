import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignIJoinedListComponent } from './campaign-i-joined-list.component';

describe('CampaignIJoinedListComponent', () => {
  let component: CampaignIJoinedListComponent;
  let fixture: ComponentFixture<CampaignIJoinedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignIJoinedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignIJoinedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
