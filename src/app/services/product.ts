import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Constants } from '../constants/constant';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api.response.models';

@Service()
export class Product {

    http=inject(HttpClient);

    getAllProducts():Observable<ApiResponseModel>{
        return this.http.get<ApiResponseModel>(environment.API_URL + Constants.API_END_POINTS.ALL_PRODUCTS)
    }

    getAllCategories():Observable<ApiResponseModel>{
        return this.http.get<ApiResponseModel>(environment.API_URL + Constants.API_END_POINTS.ALL_CATEGORIES)
    }
}
