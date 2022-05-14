import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMyFavoriteListComponent } from './campaign-my-favorite-list.component';

describe('CampaignMyFavoriteListComponent', () => {
  let component: CampaignMyFavoriteListComponent;
  let fixture: ComponentFixture<CampaignMyFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignMyFavoriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMyFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
