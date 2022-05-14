import {Component, OnInit} from '@angular/core';
import {CampaignJoinSuccessFormRequestModel} from "../../../../models/campaigns";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../../services/customer.service";
import {ToastrHandleService} from "../../../../services/toastr-handle.service";

@Component({
  selector: 'app-campaign-finish',
  templateUrl: './campaign-finish.component.html',
  styleUrls: ['./campaign-finish.component.scss']
})

export class CampaignFinishComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  campaign = {
    id: null,
    name: '',
  }

  id: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService,
              private toastrHandleService: ToastrHandleService) {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id')
    });

    this.getCampaignJoinSuccessForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getCampaignJoinSuccessForm() {
    let requestModel: CampaignJoinSuccessFormRequestModel = {
      campaignId: this.id,
      customerCode: "123",
    };
    this.customerService.getCampaignJoinSuccessForm(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.campaign = res.data.campaign;
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
