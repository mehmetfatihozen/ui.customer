import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-my-favorite-list',
  templateUrl: './campaign-my-favorite-list.component.html',
  styleUrls: ['./campaign-my-favorite-list.component.scss']
})

export class CampaignMyFavoriteListComponent implements OnInit {
  blockTitle = "Favorilerim";
  pageTypeId = 3;
  customerCode = 123;

  constructor() {
  }

  ngOnInit(): void {
  }
}
