import { cityWeatherTemplate } from './../../wmodel/cityWeatherTemplate';
import { respWeather } from './../../wmodel/respWeatherModel';
import { HttpClient } from '@angular/common/http';
import { WeatherUnit } from './../../wmodel/UnitEnum';
import { WeatherService } from './../../wservices/weather.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  actual: string = this.wservice.getActualUnit();
  weatherlUnit = WeatherUnit;
  cityName;
  cities: cityWeatherTemplate[] = this.wservice.getCitiesFromStorage();

  constructor(private wservice: WeatherService, private http: HttpClient) {}

  changeTempByUnit(temp: number) {
    return temp * 1.8 + 32;
  }

  remove(city) {
    const list = this.cities.filter((e) => e !== city);
    this.cities = list;
    localStorage.setItem('citiesList', JSON.stringify(this.cities));
  }

  ngOnInit(): void {
    if (!this.wservice.getActualUnit) {
      this.wservice.setActualUnit(WeatherUnit.Celcius);
    }
  }
  IsOnList(cities, newCity) {
    let flag = true;
    cities.forEach((oldCity) => {
      if (oldCity.id === newCity.id) {
        flag = false;
      }
    });
    return flag;
  }
  addCityWeather() {
    this.wservice.addCityWeather(this.cityName).subscribe(
      (data) => {
        let newCity: cityWeatherTemplate = {
          id: data.city.id,
          cityName: data.city.name,
          coordLat: data.city.coord.lat,
          coordLon: data.city.coord.lon,
          temp: data.list[0].main.temp,
        };
        this.cities = this.wservice.getCitiesFromStorage();
        if (this.IsOnList(this.cities, newCity)) {
          this.cities.push(newCity);
          localStorage.setItem('citiesList', JSON.stringify(this.cities));
        } else {
          alert('Miasto jest już na liście');
        }

        this.cityName = '';
      },
      (err) => {
        alert('Nie znaleziono takiego miasta');
      }
    );
  }
}
