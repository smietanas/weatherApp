import { cityWeatherTemplate } from './../../wmodel/cityWeatherTemplate';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/wservices/weather.service';
import { WeatherUnit } from 'src/app/wmodel/UnitEnum';

@Component({
  selector: 'app-spec-city',
  templateUrl: './spec-city.component.html',
  styleUrls: ['./spec-city.component.css'],
})
export class SpecCityComponent implements OnInit {
  actual = this.wservice.getActualUnit();
  weatherlUnit = WeatherUnit;
  changeTempByUnit(temp: number) {
    return temp * 1.8 + 32;
  }
  cities: cityWeatherTemplate[] = this.wservice.getCitiesFromStorage();

  param: number;
  actualcity;

  getCity(param: number) {
    let acCity;
    this.cities.forEach((city) => {
      if (city.id === param) {
        acCity = city;
      }
    });
    return acCity;
  }
  constructor(
    private route: ActivatedRoute,
    private wservice: WeatherService
  ) {}

  ngOnInit(): void {
    // this.param = this.route.params.value.id;
    this.param = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.param);

    // this.route.paramMap
    //   .pipe(switchMap((params: ParamMap) => params.get('id')))
    //   .subscribe((param) => {
    //     this.param = Number(param);
    //     console.log(this.param);
    //   });
    this.actualcity = this.getCity(this.param);
  }
}
