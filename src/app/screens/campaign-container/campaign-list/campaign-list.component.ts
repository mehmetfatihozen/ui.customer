import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})

export class CampaignListComponent implements OnInit {
  blockTitle = "Kampanyalar";
  pageTypeId = 1;
  customerCode = 123;

  constructor() {
  }

  ngOnInit(): void {
  }
}
