import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiParameter } from '../../shared/models/api-parameter';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const apiRoot = environment.apiRoot;

@Injectable()
export class ApiService {
  constructor(protected httpClient: HttpClient) {}

  private buildHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    });
    return headers;
  }

  private buildParams(values?: Array<ApiParameter>): HttpParams {
    let params = new HttpParams();
    if (values) {
      values.forEach((val) => {
        const isUndefined = typeof val.value === 'undefined';
        const hasValue = val.value !== null;
        const isNan = typeof val.value === 'number' && isNaN(val.value);
        if (!isUndefined && hasValue && !isNan) {
          params = params.append(val.key, val.value);
        }
      });
    }
    return params;
  }

  doPut<TSend, TReceive>(
    url: string,
    send: TSend,
    params?: Array<ApiParameter>
  ): Observable<TReceive> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.put<TReceive>(url, send, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    } else {
      return this.httpClient.put<TReceive>(url, send, {
        headers: this.buildHeaders(),
      });
    }
  }

  doPost<TSend, TReceive>(
    url: string,
    send: TSend,
    params?: Array<ApiParameter>
  ): Observable<TReceive> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.post<TReceive>(url, send, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    } else {
      return this.httpClient.post<TReceive>(url, send, {
        headers: this.buildHeaders(),
      });
    }
  }

  doGet<T>(url: string, params?: Array<ApiParameter>): Observable<T> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.get<T>(url, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    }
    return this.httpClient.get<T>(url, { headers: this.buildHeaders() });
  }

  doDelete<T>(url: string, params?: Array<ApiParameter>): Observable<T> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.delete<T>(url, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    }
    return this.httpClient.delete<T>(url, { headers: this.buildHeaders() });
  }
}
