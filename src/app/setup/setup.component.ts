import { WeatherUnit } from './../wmodel/UnitEnum';
import { WeatherService } from './../wservices/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  constructor(private wservice: WeatherService) {}
  actualUnit = this.wservice.getActualUnit();
  weatherlUnit = WeatherUnit;

  onItemChange(selected) {
    this.wservice.setActualUnit(selected);
  }

  ngOnInit(): void {}
}
