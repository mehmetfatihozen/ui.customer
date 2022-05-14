import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-expire-list',
  templateUrl: './campaign-expire-list.component.html',
  styleUrls: ['./campaign-expire-list.component.scss']
})

export class CampaignExpireListComponent implements OnInit {
  blockTitle = "Süresi Geçenler";
  pageTypeId = 4;
  customerCode = 123;
  expirePageState = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
