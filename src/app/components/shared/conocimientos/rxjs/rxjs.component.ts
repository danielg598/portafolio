import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BehaviorSubject, catchError, combineLatest, debounceTime, distinctUntilChanged, map, Observable, of, startWith, Subject, switchMap, tap } from 'rxjs';
import { OrquestadorService } from '../../../../utilities/services/orquestador.service';
import { ApiParams } from '../../../../utilities/interfaces/orquestador';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  searchControl = new FormControl('');
  private searchClick$ = new Subject<string>();
  private pageChange$ = new Subject<number>();

  formulario: FormGroup = this.fb.group({
    nombre: [''],
    apellido: ['']
  });

  nombreCompleto: string = '';

  parametros: ApiParams = {
    lat: 4.6,
    lon: -74.1,
    city: 'Bogotá',
    countryCode: 'co',
    baseCurrency: 'USD',
    targetCurrency: 'COP'
  };



  private obs$ = of(1, 2, 3, 4, 5);

  users$!: Observable<any[]>;
  totalResults: number = 0;
  currentPage: number = 1;
  perPage: number = 6; // GitHub permite hasta 100

  constructor
    (
      @Inject(PLATFORM_ID) private platformId: Object,
      private http: HttpClient,
      private fb: FormBuilder,
      private orqauestador: OrquestadorService
    ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observablesForms();
      this.searchUsers();

    }
  }

  orquestador() {
    this.orqauestador.getWeather(this.parametros).subscribe(data => {
      console.log('Clima en Colombia:', data);
    });

    this.orqauestador.getWeatherByCity(this.parametros).subscribe(data => {
      console.log('Clima en Bogotá:', data);
    });

    this.orqauestador.getTopNews(this.parametros).subscribe(news => {
      console.log('Noticias en Colombia:', news);
    });

    this.orqauestador.getExchange(this.parametros).subscribe(rate => {
      console.log('Tasa de cambio USD a COP:', rate);
    });
  }

  searchUsers() {
    const search$ = this.searchClick$.pipe(startWith('daniel'));

    const page$ = this.pageChange$.pipe(debounceTime(300), startWith(this.currentPage));

    this.users$ = combineLatest([search$, page$]).pipe(
      switchMap(([query, page]) => {
        if (!query) return of([]);

        const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${this.perPage}`;

        return this.http.get<any>(url).pipe(
          tap(res => this.totalResults = res.total_count),
          map(res => res.items),
          catchError(error => {
            if (error.status === 403) {
              alert('Has excedido el límite de peticiones de GitHub. Intenta más tarde o usa autenticación.');
            }
            return of([]);
          })
        );
      })
    );

    this.obs$.pipe(
      map(value => value * 3)
    ).subscribe(v => console.log('Valor transformado:', v));
  }

  observablesForms() {

    const nombre$ = this.formulario.get('nombre')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );
    const apellido$ = this.formulario.get('apellido')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    combineLatest([nombre$, apellido$]).pipe(
      map(([nombre, apellido]) => `@${nombre}${apellido}`.trim())
    ).subscribe(combinedValue => {
      this.nombreCompleto = combinedValue;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / this.perPage);
  }

  buscar() {
    const query = this.searchControl.value?.trim();
    if (query) {
      this.currentPage = 1;
      this.searchClick$.next(query);
      this.pageChange$.next(this.currentPage);
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.totalResults / this.perPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.pageChange$.next(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange$.next(this.currentPage);
    }
  }

}
