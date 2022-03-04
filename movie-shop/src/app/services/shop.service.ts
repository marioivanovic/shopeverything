import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Product {
  id: string;
  name: string;
  unitprice_ati: string;
  qty: number;
  rating: number;
  breadcrumb_label: string;
  url_picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: string;

  mycategorys: Observable<any>;

  public search = new BehaviorSubject<string>('');

  subjectListProduct$ = new Subject<any[]>();
  subjectCategoriesProduct$ = new Subject<any[]>();

  // Test des Observables froids
  obs$ = new Observable(fluxData => fluxData.next(Math.random()));

  // Test des Observables chauds
  sub$ = new Subject<string>();

  behav$ = new BehaviorSubject<string>('Video Janvier 2021');

  private myCategorysSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrlApi;
    this.mycategorys = this.myCategorysSubject.asObservable();

    // Abonnement observable froid
    this.obs$.subscribe(data => {
      // console.log('Observer 1: ', data);
    });

    this.obs$.subscribe(data => {
      // console.log('Observer 2: ', data);
    });

    // Emission via observable chauds
    this.sub$.next('Newletter Janvier 2021'); // envoyer une autre newletter Janvier 2021
    // console.log('...Envoie nl janvier 2021');

    // Abonnement observable chauds
    this.sub$.subscribe(data => {
      // console.log('Observer Subject 1: ', data);
    });

    this.sub$.subscribe(data => {
      // console.log('Observer Subject 2: ', data);
    });

    this.sub$.subscribe(data => {
      // console.log('Observer Subject 3: ', data);
    });

    this.sub$.next('Newletter Mars 2021'); // envoyer une autre newletter Mars 2021
    // console.log('...Envoie nl Mars 2021');

    this.sub$.subscribe(data => {
      // console.log('Observer Subject 4: ', data);
    });

    this.sub$.next('Newletter Avril 2021'); // envoyer une autre newletter Mars 2021
    // console.log('...Envoie nl Avril 2021');

    this.behav$.subscribe(data => {
      // console.log('Observer Behavior 1: ', data);
    });

    this.behav$.next('Video Mars 2021');

    this.behav$.subscribe(data => {
      // console.log('Observer Behavior 2: ', data);
    });

    this.behav$.next('Video Avril 2021');
  }

  getListProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  getListProductsChaud(): void {
    this.getListProducts().subscribe(data => {
      this.subjectListProduct$.next(data);
    });
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getCategorie(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories/${parseInt(id)}`);
  }

  getById(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/${parseInt(id)}`);
  }

  // createUser(): Observable<any[]>{
  //   return this.http.post<any[]>(`${this.baseUrl}/users`);
  // }
}
