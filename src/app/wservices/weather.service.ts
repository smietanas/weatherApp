import { cityWeatherTemplate } from './../wmodel/cityWeatherTemplate';
import { respWeather } from './../wmodel/respWeatherModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getActualUnit(): string {
    return localStorage.getItem('temperature');
  }

  setActualUnit(selected: string) {
    localStorage.setItem('temperature', selected);
  }

  addCityWeather(cityName: string): Observable<respWeather> {
    return this.http.get<respWeather>(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=1&units=metric&lang=pl&appid=ed6b53280a33f6cb60ac3beeb2f104f0`
    );
  }

  getCitiesFromStorage(): cityWeatherTemplate[] {
    if (JSON.parse(localStorage.getItem('citiesList'))) {
      return JSON.parse(localStorage.getItem('citiesList'));
    }

    return [];
  }
}
