import {IPagingRequestModel} from "./paging.model";

interface ICampaignListGetByFilterRequestModel {
  customerCode?: any;
  pageTypeId?: any;
}

export class CampaignListGetByFilterRequestModel implements ICampaignListGetByFilterRequestModel, IPagingRequestModel {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: any;
  sortDir?: any;
  customerCode?: any;
  pageTypeId?: any;
}

interface ICampaignJoinRequestModel {
  customerCode?: any;
  campaignId?: any;
  isJoin?: any;
}

export class CampaignJoinRequestModel implements ICampaignJoinRequestModel {
  customerCode?: any;
  campaignId?: any;
  isJoin?: any;
}

interface ICampaignJoinSuccessFormRequestModel {
  customerCode?: any;
  campaignId?: any;
}

export class CampaignJoinSuccessFormRequestModel implements ICampaignJoinSuccessFormRequestModel {
  customerCode?: any;
  campaignId?: any;
}

interface ICampaignFavoriteRequestModel {
  customerCode?: any;
  campaignId?: any;
  isFavorite?: any;
}

export class CampaignFavoriteRequestModel implements ICampaignFavoriteRequestModel {
  customerCode?: any;
  campaignId?: any;
  isFavorite?: any;
}

interface IGetCampaignInfoRequestModel {
  campaignId?: any;
  customerCode?: any;
}

export class GetCampaignInfoRequestModel implements IGetCampaignInfoRequestModel {
  campaignId?: any;
  customerCode?: any;
}

interface IGetCampaignDetailRequestModel {
  campaignId?: any;
  customerCode?: any;
}

export class GetCampaignDetailRequestModel implements IGetCampaignDetailRequestModel {
  campaignId?: any;
  customerCode?: any;
}


