import {Component, Input} from '@angular/core';
import {SocialInfo} from "../../models/IResort";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  @Input('currentSocialInfo')
  public currentSocialInfo: SocialInfo;


  constructor() { }

}
