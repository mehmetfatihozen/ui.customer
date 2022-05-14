import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiPaths} from "../models/api-paths";
import {ApiBaseResponseModel} from "../models/api-base-response.model";
import {
  CampaignFavoriteRequestModel,
  CampaignJoinRequestModel, CampaignJoinSuccessFormRequestModel,
  CampaignListGetByFilterRequestModel, GetCampaignDetailRequestModel, GetCampaignInfoRequestModel
} from '../models/campaigns';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  campaignListGetByFilter(data: CampaignListGetByFilterRequestModel) {
    const url = `${this.baseUrl}/${ApiPaths.CampaignListGetByFilter}`;
    return this.httpClient.post<ApiBaseResponseModel>(url, data);
  }

  campaignJoin(data: CampaignJoinRequestModel) {
    const url = `${this.baseUrl}/${ApiPaths.CampaignJoin}`;
    return this.httpClient.post<ApiBaseResponseModel>(url, data);
  }

  getCampaignJoinSuccessForm(data: CampaignJoinSuccessFormRequestModel) {
    let params = new HttpParams();
    params = params.append('campaignId', data.campaignId);
    params = params.append('customerCode', data.customerCode);

    const url = `${this.baseUrl}/${ApiPaths.CampaignJoinSuccessForm}`;
    return this.httpClient.get<ApiBaseResponseModel>(url, {params: params});
  }

  campaignFavorite(data: CampaignFavoriteRequestModel) {

    const url = `${this.baseUrl}/${ApiPaths.CampaignFavorite}`;
    return this.httpClient.post<ApiBaseResponseModel>(url, data);
  }

  getCampaignInfo(data: GetCampaignInfoRequestModel) {
    let params = new HttpParams();
    params = params.append('campaignId', data.campaignId);
    params = params.append('customerCode', data.customerCode);

    const url = `${this.baseUrl}/${ApiPaths.GetCampaignInfo}`;
    return this.httpClient.get<ApiBaseResponseModel>(url, {params: params});
  }

  getCampaignDetail(data: GetCampaignDetailRequestModel) {
    let params = new HttpParams();
    params = params.append('campaignId', data.campaignId);
    params = params.append('customerCode', data.customerCode);

    const url = `${this.baseUrl}/${ApiPaths.GetCampaignDetail}`;
    return this.httpClient.get<ApiBaseResponseModel>(url, {params: params});
  }
}
