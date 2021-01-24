import { Temp } from './Temp';
import { City } from './City';

export interface respWeather {
  city: City;
  list: Array<Temp>;
}
