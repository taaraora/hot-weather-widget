export interface IResort {
  // main resort photo url
  img: string;
  leftImgPreview: string;
  rightImgPreview: string;
  address: string;
  phone: number; // дополнительно задание pipe для форматирования
  weather: Weather;
  socialInfo: SocialInfo,
  // five start hotel, african hotel, any property of hotel is here is used for aggregation
  type: string;
}

export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface SocialInfo {
  title: string;
  // small photo url for social media widget preview
  img: string;
  followers: number;
  following: number;
}
