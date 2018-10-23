import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesProvider {
  token: string;
  nameUser: string;

  constructor(private httpClient: HttpClient, private http: Http) {
    console.log('Hello ServicesProvider Provider');
  }

  getToken(): Observable<any>{
    let url = "https://micuentamilatesting.microlending.com.ar/rest/v1/tokencliente";
 
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
 
 
    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers });
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', '3654336901')
      .set('password', '12345678')
 
 
     return this.http.post(url, body.toString(),options);
  }

  getDatosCliente() {
    //console.log('entroo', this.getToken());
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append("Authorization", "Bearer " + this.getToken());

    const requestOptions = new RequestOptions({ headers: headers })

    this.http.get("https://micuentamilatesting.microlending.com.ar/rest/v1/persona?TipoDocumento=1&NroDocumento=36543369", requestOptions)
      .subscribe(data => {
        console.log('All: ' + data)
      }, err => console.log('err', err));
  }


  /* getDatosCliente(TipoDocumento,NroDocumento){
    let headers:Headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Bearer ' + this.getToken());

    let options = new RequestOptions({headers:headers});
    
    this.http.get("https://micuentamilatesting.microlending.com.ar/rest/v1/persona?TipoDocumento=" + TipoDocumento + "&NroDocumento=" + NroDocumento, options)
    .map(res=>res.json()).subscribe(data => {
      console.log('213123',data);
    },(error) => {
      console.log(error);
    })
  } */

  /* getPrestamoCliente(TipoDocumento,NroDocumento,SoloVigentes): Observable<any> {
    var headers = new Headers();
    headers.append("authorization", "Bearer " + this.getToken());
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("https://micuentamilatesting.microlending.com.ar/rest/v1/prestamo?TipoDocumento=" + TipoDocumento + "&NroDocumento=" + NroDocumento + "&SoloVigentes=" + SoloVigentes,requestOptions)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }
 
  getPrestamoDetalle(PrestamoId): Observable<any> {
    var headers = new Headers();
    headers.append("authorization", "Bearer " + this.getToken());
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("https://micuentamilatesting.microlending.com.ar/rest/v1/prestamo/" + PrestamoId)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  } */

}
