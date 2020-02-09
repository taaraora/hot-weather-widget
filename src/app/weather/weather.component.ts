import {Component} from '@angular/core';
import {IResort} from "../models/IResort";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public resorts: Array<IResort>;

  public currentResort: IResort;

  public resortTypes: Map<number, string>;

  constructor() {
    this.resortTypes = new Map<number, string>([
      [0, 'five stars'],
      [1, 'fishing'],
      [2, 'seals'],
    ]);
    this.resorts = this.mockResorts(5);
  }

  private mockResorts(count: number): Array<IResort>{
    let mockResort: IResort = {
      address: 'Sed perspiciatis\nEt harum quidem',
      phone: 1285968685,
      leftImgPreview: 'assets/images/r1.jpg',
      rightImgPreview: 'assets/images/res.jpg',
      img: 'assets/images/1.jpg',
      type: 'seals',
      weather: {
        title: '',
        icon: '',
        water: 33,
        temperature: 22,
      },
      socialInfo: {
        title: '',
        img: 'assets/images/b1.jpg',
        followers: 123,
        following: 444,
      },
    };
    let result = new Array<IResort>();
    if (count < 1) {
      return result;
    }
    result.push(mockResort);
    if (count === 1){
      return result;
    }

    for (let i = count - 1; i > 0; i--) {
      let resortTypeKey = Math.floor(Math.random() * 3);
      let r = {
        ...mockResort,
        weather: {...mockResort.weather},
        socialInfo: {...mockResort.socialInfo},
        type: this.resortTypes.get(resortTypeKey),
      } as IResort;
      let idx = i + 77;
      r.phone = r.phone + i;
      r.img = `https://picsum.photos/id/${idx}/500/300`;
      r.leftImgPreview = `https://picsum.photos/id/${idx}/50/50`;
      r.rightImgPreview = `https://picsum.photos/id/${idx + idx}/50/50`;
      r.socialInfo.img = `https://picsum.photos/id/${idx + idx}/100/100`;
      r.socialInfo.following = r.socialInfo.following + 10 * i;
      r.socialInfo.followers = r.socialInfo.followers + 10 * i;
      r.weather.water = r.weather.water + i;
      r.weather.temperature = r.weather.temperature + i;
      result.push(r);
    }

    return result;
  }

  setCurrentResort(resort: IResort):void {
    this.currentResort = resort;
  }

}
