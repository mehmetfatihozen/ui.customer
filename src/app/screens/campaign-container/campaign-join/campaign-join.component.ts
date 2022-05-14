import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {NgxSmartModalService} from "ngx-smart-modal";
import {Subject, takeUntil} from "rxjs";
import {UtilityService} from 'src/app/services/utility.service';
import {CampaignJoinRequestModel, GetCampaignInfoRequestModel} from "../../../models/campaigns";
import {CustomerService} from "../../../services/customer.service";
import {ToastrHandleService} from "../../../services/toastr-handle.service";

@Component({
  selector: 'app-campaign-join',
  templateUrl: './campaign-join.component.html',
  styleUrls: ['./campaign-join.component.scss']
})

export class CampaignJoinComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  campaign = {
    name: '',
    titleTr: '',
    campaignDetail: {
      campaignListImageUrl: '',
      summaryTr: '',
      detailTr: '',
    }
  };
  targetGroupList: any[];
  contractFileUrl: any;
  contractApproveState: boolean = false;

  editorConfig: AngularEditorConfig = {
    editable: false,
    showToolbar: false
  }

  id: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService,
              private toastrHandleService: ToastrHandleService,
              private utilityService: UtilityService,
              private modalService: NgxSmartModalService) {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id')
    });

    this.getCampaignInfo();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  contractModalOk() {
    this.contractApproveState = true;
    this.modalService.getModal('contractApprovalModal').close();
  }

  join() {
    this.campaignJoin();
  }

  getCampaignInfo() {
    let requestModel: GetCampaignInfoRequestModel = {
      campaignId: this.id,
      customerCode: "123",
    };
    this.customerService.getCampaignInfo(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.campaign = res.data.campaign;
            this.targetGroupList = res.data.campaignTarget?.targetGroupList;

            let document = res.data.contractFile?.document;
            if (document) {
              let blob = this.utilityService.convertBase64ToFile(document.data, document.documentName, document.mimeType);
              let url = window.URL.createObjectURL(blob);
              this.contractFileUrl = url;
            } else {
              this.contractApproveState = true;
            }
          } else
            this.toastrHandleService.error(res.errorMessage);
        },
        error: err => {
          if (err.error)
            this.toastrHandleService.error(err.error);
        }
      });
  }

  campaignJoin() {
    let requestModel: CampaignJoinRequestModel = {
      campaignId: this.id,
      customerCode: "123",
      isJoin: true
    };
    this.customerService.campaignJoin(requestModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (!res.hasError && res.data) {
            this.router.navigate([`../finish`], {relativeTo: this.route});
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
