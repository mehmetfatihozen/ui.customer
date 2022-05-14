import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-i-joined-list',
  templateUrl: './campaign-i-joined-list.component.html',
  styleUrls: ['./campaign-i-joined-list.component.scss']
})

export class CampaignIJoinedListComponent implements OnInit {
  blockTitle = "Katıldıklarım";
  pageTypeId = 2;
  customerCode = 123;

  constructor() {
  }

  ngOnInit(): void {
  }
}
