import {Component, Input} from '@angular/core';
import {Weather} from "../../models/IResort";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  @Input('currentWeather')
  public currentWeather: Weather;

  constructor() {
  }

}
