import {Component, Input, OnInit} from '@angular/core';
import {CampaignFavoriteRequestModel, CampaignListGetByFilterRequestModel} from "../../models/campaigns";
import {Subject, takeUntil} from "rxjs";
import {CustomerService} from "../../services/customer.service";
import {ToastrHandleService} from "../../services/toastr-handle.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  @Input('pageTypeId') pageTypeId: any;
  @Input('customerCode') customerCode: any;
  @Input('expirePage') expirePage: any = false;

  customerCampaignList: any[];

  constructor(private customerService: CustomerService,
              private toastrHandleService: ToastrHandleService) {
  }

  ngOnInit(): void {
    this.campaignListGetByFilter();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  campaignListGetByFilter() {
    let requestModel: CampaignListGetByFilterRequestModel = {
      customerCode: "123",
      pageTypeId: this.pageTypeId
    };
    this.customerService.campaignListGetByFilter(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.customerCampaignList = res.data.customerCampaignList;
          } else
            this.toastrHandleService.error(res.errorMessage);
        },
        error: err => {
          if (err.error)
            this.toastrHandleService.error(err.error);
        }
      });
  }

  setCampaignFavoriteState(campaign: any) {
    let requestModel: CampaignFavoriteRequestModel = {
      campaignId: campaign.campaignId,
      customerCode: "123",
      isFavorite: !campaign.isFavorite
    };
    this.customerService.campaignFavorite(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            campaign.isFavorite = res.data.isFavorite;
          } else
            this.toastrHandleService.error(res.errorMessage);
        },
        error: err => {
          if (err.error)
            this.toastrHandleService.error(err.error);
        }
      });
  }
}
