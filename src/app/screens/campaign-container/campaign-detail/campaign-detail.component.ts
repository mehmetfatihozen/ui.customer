import {Component, OnInit} from '@angular/core';
import {ToastrHandleService} from 'src/app/services/toastr-handle.service';
import {CustomerService} from "../../../services/customer.service";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from '@angular/router';
import {CampaignJoinRequestModel, GetCampaignDetailRequestModel} from "../../../models/campaigns";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})

export class CampaignDetailComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  editorConfig: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
  }

  campaignName: string = '';
  endDate: string = '';
  isAchieved: boolean = false;
  totalAchievementStr: string = '';
  totalAchievementCurrencyCode: string = '';
  previousMonthAchievementStr: string = '';
  previousMonthAchievementCurrencyCode: string = '';
  usedAmountStr: string = '';
  usedAmountCurrencyCode: string = '';

  targetColorList: any[] = [];
  targetGroupList: any[];
  campaignAchievementList: any[];

  id: any;

  constructor(private customerService: CustomerService,
              private toastrHandleService: ToastrHandleService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id')
      this.getCampaignDetail();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  leave() {
    this.campaignLeave();
  }

  getCampaignDetail() {
    let requestModel: GetCampaignDetailRequestModel = {
      campaignId: this.id,
      customerCode: "123",
    };
    this.customerService.getCampaignDetail(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.campaignName = res.data.campaign?.name;
            this.endDate = res.data.campaign?.endDate;
            this.isAchieved = res.data.isAchieved;
            this.totalAchievementStr = res.data.totalAchievementStr;
            this.totalAchievementCurrencyCode = res.data.totalAchievementCurrencyCode;
            this.previousMonthAchievementStr = res.data.previousMonthAchievementStr;
            this.previousMonthAchievementCurrencyCode = res.data.previousMonthAchievementCurrencyCode;
            this.usedAmountStr = res.data.usedAmountStr;
            this.usedAmountCurrencyCode = res.data.usedAmountCurrencyCode;

            this.targetGroupList = res.data.campaignTarget?.targetGroupList;
            this.setRandomColorList();
            this.campaignAchievementList = res.data.campaignAchievementList;
          } else
            this.toastrHandleService.error(res.errorMessage);
        },
        error: err => {
          if (err.error)
            this.toastrHandleService.error(err.error);
        }
      });
  }

  campaignLeave() {
    let requestModel: CampaignJoinRequestModel = {
      campaignId: this.id,
      customerCode: "123",
      isJoin: false
    };
    this.customerService.campaignJoin(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.router.navigate([`/campaigns/list`], {relativeTo: this.route});
          } else
            this.toastrHandleService.error(res.errorMessage);
        },
        error: err => {
          if (err.error)
            this.toastrHandleService.error(err.error);
        }
      });
  }

  targetListMap(targetList: any[], targetViewTypeId) {
    let returnList: any[] = [];
    targetList.map(x => {
      if (x.targetViewTypeId == targetViewTypeId)
        returnList.push(x);
    });
    return returnList;
  }

  setRandomColorList() {
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 20; i++) {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.targetColorList.push(color);
    }
  }
}
