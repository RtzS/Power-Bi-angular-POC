import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokenServiceUrl } from '../../constants';
import { ConfigResponse } from '../app.component';

@Injectable({
  providedIn: 'root',
})

/**
 * Service to make HTTP calls
 */
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @returns embed configuration
   */
  async getEmbedConfig(
    airlineId: string
  ): Promise<Observable<TokenServiceResponse>> {
    let url =
      'http://localhost:8080/token-generator/airline/${airlineId}/token';

    return this.httpClient.post<TokenServiceResponse>(url, null);
  }
}

export interface TokenServiceResponse {
  url: string;
  token: string;
}
