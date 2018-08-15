import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable()

export class TestService {

  constructor(private http: HttpClient) {
    console.log('"Soy el puto servicios 1"');
  }

  getMamada() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsImp3ayI6eyJlIjoiQVFBQiIsIm4iOiJBTTBEZDd4QWR2NkgteWdMN3I4cUNMZEUtM0kya2s0NXpnWnREZF9xczhmdm5ZZmRpcVRTVjRfMnQ2T0dHOENWNUNlNDFQTXBJd21MNDEwWDlJWm52aHhvWWlGY01TYU9lSXFvZS1ySkEwdVp1dzJySGhYWjNXVkNlS2V6UlZjQ09Zc1FOLW1RSzBtZno1XzNvLWV2MFVZd1hrU093QkJsMUVocUl3VkR3T2llZzJKTUdsMEVYc1BaZmtOWkktSFU0b01paS1Uck5MelJXa01tTHZtMDloTDV6b3NVTkExNXZlQ0twaDJXcG1TbTJTNjFuRGhIN2dMRW95bURuVEVqUFk1QW9oMmluSS0zNlJHWVZNVVViTzQ2Q3JOVVl1SW9iT2lYbEx6QklodUlDcGZWZHhUX3g3c3RLWDVDOUJmTVRCNEdrT0hQNWNVdjdOejFkRGhJUHU4PSIsImt0eSI6IlJTQSIsImtpZCI6ImFkbWluVG9rZW4ifX0.eyJpc3MiOiJjb20uaWJtLm1mcCIsInN1YiI6ImFkbWluVG9rZW4iLCJhdWQiOiJjb20uaWJtLm1mcCIsImV4cCI6MTUzMTkyOTU3OTUwMiwic2NvcGUiOiJSZWdpc3RlcmVkQ2xpZW50IHNjb3BlQ0wifQ.rM5F32ywseCKi6Q0UOnC51VYqt_CByNpqWa7rdP8GCBRG8qjRxktcS2oMooECQpoLD8wAjD2QCZCVs7h7ryhu4NjHuxAafoIELgau0EN4gkIuABUdMlE1xRYlolLI20pb_NeEVeiAOTC1a2FMS5hhhuPmuAQ21KQzKBhfHITnERfcnJlQ469HVsJA-pgf3KYFiLFj5V7xvy5OsOp_sLwLbnYiWUGaGB7qWqBmOwMRF3Z96IB8fRL56X-ecTPlrR3MGWZS_jMjq6sPAt8hq73kwsf7rzADj0yoAwdzdbHf-yo5bnCqbAe76nvtkBM-XzxeZ04LkQM6fzzzOAWoXquuQ',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application / json'
    });
    this.http.get('https://fiu.mx/api/fiuUI/cotizacion/getLogosMarca')
    .subscribe(e => {
      console.log(e);
    });

  }

}
