/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    [index: string]:string;
    userID:string,
    password:string,
    School:string,
    Group:string,
    Name:string,
    Identity:string,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}