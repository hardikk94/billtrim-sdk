import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  providers:any = {
    cable: [
      {
        "_id": "5af9a9019b1f40176c98998a",
        "type": "cable",
        "name": "AT&T DirecTV",
        "sequence": 1,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/atnt-directv.png",
        "passwordRegex": "^(?=.{6,24})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c98998e",
        "type": "cable",
        "name": "Comcast Xfinity",
        "sequence": 2,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/comcast-xfinity.png",
        "passwordRegex": "^(?=.{8,128})(?=.*[a-z])(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c98999a",
        "type": "cable",
        "name": "Verizon Fios",
        "sequence": 3,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/verizon-fios.png",
        "passwordRegex": "^(?=.{8,30})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989bbe",
        "type": "cable",
        "name": "Spectrum",
        "sequence": 4,
        "websiteURL": "https://www.spectrum.com/",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/charter-spectrum.png",
        "passwordRegex": "^(?=.{6,40})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c98999e",
        "type": "cable",
        "name": "Cox Communications",
        "sequence": 5,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/cox.png",
        "passwordRegex": "^(?=.{8,24})(?=.*[a-z])(?!.*[ ])(?=.*[A-Z])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989996",
        "type": "cable",
        "name": "Dish Network",
        "sequence": 6,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/dish-network.png"
      },
      {
        "_id": "5af9a9019b1f40176c9899a2",
        "type": "cable",
        "name": "Altice (Cablevision and Suddenlink Communications)",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/altice.png"
      },
      {
        "_id": "5af9a9019b1f40176c9899ca",
        "type": "cable",
        "name": "Armstrong Cable Services",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899c2",
        "type": "cable",
        "name": "Atlantic Broadband Group, LLC",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899d6",
        "type": "cable",
        "name": "Blue Ridge Communications",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899e2",
        "type": "cable",
        "name": "Buckeye Broadband",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899b2",
        "type": "cable",
        "name": "Cable One",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899be",
        "type": "cable",
        "name": "CenturyLink",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899ea",
        "type": "cable",
        "name": "Google Fiber",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899e6",
        "type": "cable",
        "name": "Grande Communications",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899ee",
        "type": "cable",
        "name": "Hawaiian Telcom",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899aa",
        "type": "cable",
        "name": "Mediacom",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899d2",
        "type": "cable",
        "name": "Metrocast Cablevision",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/cablevision-company.png"
      },
      {
        "_id": "5af9a9019b1f40176c9899c6",
        "type": "cable",
        "name": "Midcontinent Communications",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a62",
        "type": "cable",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf2f",
        "type": "cable",
        "name": "Optimum",
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/optimum.png",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": true
      }
    ],
    internet: [
      {
        "_id": "5af9a9019b1f40176c9899f2",
        "type": "internet",
        "name": "Comcast Xfinity",
        "sequence": 1,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/comcast-xfinity.png",
        "passwordRegex": "^(?=.{8,128})(?=.*[a-z])(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989baa",
        "type": "internet",
        "name": "AT&T U-verse",
        "sequence": 2,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/atnt-u-verse.png",
        "passwordRegex": "^(?=.{6,24})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989bb6",
        "type": "internet",
        "name": "Verizon Fios",
        "sequence": 2,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/verizon-fios.png",
        "passwordRegex": "^(?=.{8,30})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989bc2",
        "type": "internet",
        "name": "Spectrum",
        "sequence": 3,
        "websiteURL": "https://www.spectrum.com/",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/charter-spectrum.png",
        "passwordRegex": "^(?=.{6,40})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a22",
        "type": "internet",
        "name": "Buckeye Broadband",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf22",
        "type": "internet",
        "name": "CenturyLink",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c9899fe",
        "type": "internet",
        "name": "Cox Communications",
        "sequence": 5,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/cox.png",
        "passwordRegex": "^(?=.{8,24})(?=.*[a-z])(?!.*[ ])(?=.*[A-Z])(?=.*\\d).+$"
      },
      {
        "_id": "5ca5aa208245daea321fd9f8",
        "type": "internet",
        "name": "EarthLink",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf27",
        "type": "internet",
        "name": "Frontier Communications",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf2a",
        "type": "internet",
        "name": "Google Fiber",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5ca6efef8245daea32276ce2",
        "type": "internet",
        "name": "HughesNet",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a26",
        "type": "internet",
        "name": "LongLines Communications",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a0e",
        "type": "internet",
        "name": "Mediacom",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989bce",
        "type": "internet",
        "name": "Optimum",
        "sequence": 5,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/optimum.png"
      },
      {
        "_id": "5af9a9019b1f40176c989a5e",
        "type": "internet",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a16",
        "type": "internet",
        "name": "RCN",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5ca5aa498245daea321fdade",
        "type": "internet",
        "name": "Rise Broadband",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a12",
        "type": "internet",
        "name": "Suddenlink",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/suddenlink.png"
      },
      {
        "_id": "5af9a9019b1f40176c989a0a",
        "type": "internet",
        "name": "WOW!",
        "sequence": 5,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf35",
        "type": "internet",
        "name": "WaveDivision Holdings, LLC",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf36",
        "type": "internet",
        "name": "Windstream",
        "sequence": 10,
        "scraperAvailable": false
      }
    ],
    cellphone: [
      {
        "_id": "5af9a9019b1f40176c989a2e",
        "type": "cellphone",
        "name": "AT&T",
        "sequence": 1,
        "websiteURL": "https://www.att.com/",
        "backgroundColor": "#04ace4",
        "forgotPassUrl": "https://www.att.com/my/#/forgotLoginLanding?origination_point=OLAM_LOGIN&Flow_Indicator=FPWD&olamRedirectInd=FullWeb",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/atnt.png",
        "passwordRegex": "^(?=.{6,24})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a32",
        "type": "cellphone",
        "name": "T-Mobile",
        "sequence": 2,
        "websiteURL": "https://www.t-mobile.com/",
        "backgroundColor": "#ec048c",
        "forgotPassUrl": "https://account.t-mobile.com/oauth2/v1/forgotpassword",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/t-mobile.png",
        "passwordRegex": "^(?=.{8,50})(?=.*[a-z])(?!.*[ ])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a2a",
        "type": "cellphone",
        "name": "Verizon",
        "sequence": 3,
        "websiteURL": "https://www.verizonwireless.com/",
        "backgroundColor": "#040404",
        "forgotPassUrl": "https://login.verizonwireless.com/accessmanager/public/c/fp/start",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/verizon.png",
        "passwordRegex": "^(?=.{8,30})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a36",
        "type": "cellphone",
        "name": "Sprint",
        "sequence": 4,
        "websiteURL": "https://www.sprint.com/en/shop/plans.html",
        "backgroundColor": "#fcdc04",
        "forgotPassUrl": "https://www.sprint.com/en/login/retrieveusername.html",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/sprint.png",
        "passwordRegex": "^(?=.{6,33})(?=.*[a-z])(?!.*[ ])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a42",
        "type": "cellphone",
        "name": "Boost Mobile",
        "sequence": 10,
        "websiteURL": "https://www.boostmobile.com/",
        "backgroundColor": "#f47c24",
        "forgotPassUrl": "https://www5.boostmobile.com/#!/support/faq/account-management/account-security/",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/boost-mobile.png"
      },
      {
        "_id": "5af9a9019b1f40176c989a3e",
        "type": "cellphone",
        "name": "Consumer Cellular",
        "sequence": 10,
        "websiteURL": "https://www.consumercellular.com/",
        "backgroundColor": "#F26631",
        "forgotPassUrl": "https://www.consumercellular.com/Register/ForgotPassword",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a46",
        "type": "cellphone",
        "name": "Credo Mobile",
        "sequence": 10,
        "websiteURL": "http://www.credomobile.com/",
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a3a",
        "type": "cellphone",
        "name": "Cricket Wireless",
        "sequence": 10,
        "websiteURL": "https://www.cricketwireless.com/",
        "backgroundColor": "#040404",
        "forgotPassUrl": "https://www.cricketwireless.com/myaccount.html#/forgotPassword/1",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/cricket-wireless.png"
      },
      {
        "_id": "5c94dbc88245daea32a1d386",
        "type": "cellphone",
        "name": "FreeUP Mobile",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5c94dd8e8245daea32a1f791",
        "type": "cellphone",
        "name": "Google Fi",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a52",
        "type": "cellphone",
        "name": "Metro PCS",
        "sequence": 10,
        "websiteURL": "https://www.metropcs.com/",
        "backgroundColor": "#343494",
        "forgotPassUrl": "https://www.metropcs.com/my-account/sign-in",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/metro-pcs.png"
      },
      {
        "_id": "5c94dd0e8245daea32a1eba4",
        "type": "cellphone",
        "name": "Mint Mobile",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a5a",
        "type": "cellphone",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5c94dd048245daea32a1eabb",
        "type": "cellphone",
        "name": "Spectrum Mobile",
        "sequence": 10,
        "scraperAvailable": false,
        "passwordRegex": "^(?=.{6,40})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989a56",
        "type": "cellphone",
        "name": "Straight Talk",
        "sequence": 10,
        "websiteURL": "https://www.straighttalk.com/wps/portal/home",
        "backgroundColor": "#040404",
        "forgotPassUrl": "https://www.straighttalk.com/wps/portal/home/h/MyAccount/forgotusername/!ut/p/a1/hZDRTsIwFIafhkvbMzvaxTtgDLaAgKDCbkxHulFdV9IVpj69BUwMIrF3bb8v5z8_TvESpxXfy4JbqSteHu4pfQkhGZNZZ3j70O11IV6Mk-iR9AkAccDqDKBeAPF0NIhCb0QgYOc-CZnn_NmM9CdTApTiZ5weEbhyOvAN_IzoHTP0kzgMnlwGdgFcZvgFDFnbAcPefMDuYRLd4gSnMlOoWSsEKGgz36cUGPUo9b3jjp0qI0GBUyNyYYRBO-O62Vi7re9a0IKmaVChdVEKtNaqBX8pG11bvDwn8crVx672O6F4fgj_yvf8HW21saWwiNd45f1j-uRk5nwtMq3fImlqu5BKjHQhKye7v10tzNToXJYi5JafHi9HAd6qJcj4Js0-yOciVyogqvMFBpnZng!!/#Z7_D0JM3QAH2RBCB0ITMJFU3E30O6",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/straight-talk.png"
      },
      {
        "_id": "5c94dc0d8245daea32a1d848",
        "type": "cellphone",
        "name": "Tello",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5c94dc628245daea32a1de43",
        "type": "cellphone",
        "name": "Ting",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5c94dc878245daea32a1e07c",
        "type": "cellphone",
        "name": "TracFone",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a4e",
        "type": "cellphone",
        "name": "US Cellular",
        "sequence": 10,
        "websiteURL": "https://www.uscellular.com/",
        "backgroundColor": "#eb3343",
        "forgotPassUrl": "https://m.uscellular.com/uscellular/app/login/forgot/step/1/",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/us-cellular.png"
      },
      {
        "_id": "5c94dbde8245daea32a1d54b",
        "type": "cellphone",
        "name": "US Mobile",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a4a",
        "type": "cellphone",
        "name": "Virgin Mobile",
        "sequence": 10,
        "websiteURL": "https://www.virginmobileusa.com/",
        "backgroundColor": "",
        "forgotPassUrl": "https://www.virginmobile.com.au/useraccounts/register/forgotemail?i_cid=MA_HM_Forgot_Email",
        "scraperAvailable": false
      },
      {
        "_id": "5c94dceb8245daea32a1e8ae",
        "type": "cellphone",
        "name": "XFINITY Mobile",
        "sequence": 10,
        "scraperAvailable": false
      }
    ],
    electricity: [
      {
        "_id": "5af9a9019b1f40176c989a8e",
        "type": "electricity",
        "name": "Bounce Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a6a",
        "type": "electricity",
        "name": "Champion Energy Services",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a8a",
        "type": "electricity",
        "name": "Cirro Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a7a",
        "type": "electricity",
        "name": "Direct Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a86",
        "type": "electricity",
        "name": "Green Mountain Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a82",
        "type": "electricity",
        "name": "Just Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a66",
        "type": "electricity",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a76",
        "type": "electricity",
        "name": "Reliant an NRG Company",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a6e",
        "type": "electricity",
        "name": "Spark Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a7e",
        "type": "electricity",
        "name": "TXU Energy",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989a72",
        "type": "electricity",
        "name": "TruSmart Energy ",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      }
    ],
    auto: [
      {
        "_id": "5af9a9019b1f40176c989afa",
        "type": "auto",
        "name": "Geico",
        "sequence": 1,
        "websiteURL": null,
        "backgroundColor": "#144494",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/geico.png",
        "passwordRegex": "^(?=.{8,16})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989afe",
        "type": "auto",
        "name": "Allstate",
        "sequence": 2,
        "websiteURL": null,
        "backgroundColor": "#243c94",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/allstate.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b02",
        "type": "auto",
        "name": "Progressive",
        "sequence": 3,
        "websiteURL": null,
        "backgroundColor": "#044393",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/progressive.png"
      },
      {
        "_id": "5af9a9019b1f40176c989af6",
        "type": "auto",
        "name": "State Farm Insurance",
        "sequence": 4,
        "websiteURL": null,
        "backgroundColor": "#e42c2c",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/state-farm.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b16",
        "type": "auto",
        "name": "American Family Insurance",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b0a",
        "type": "auto",
        "name": "Farmers Insurance",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#e41c34",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/dish-network.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b0e",
        "type": "auto",
        "name": "Liberty Mutual",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#646565",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/liberty-mutual.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b12",
        "type": "auto",
        "name": "Nationwide",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b5e",
        "type": "auto",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b1a",
        "type": "auto",
        "name": "Travellers",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/travellers.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b06",
        "type": "auto",
        "name": "USAA",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#043c64",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/usaa.png"
      }
    ],
    home: [
      {
        "_id": "5af9a9019b1f41176c989afa",
        "type": "home",
        "name": "Geico",
        "sequence": 1,
        "websiteURL": "https://www.geico.com/",
        "backgroundColor": "#144494",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/geico.png",
        "passwordRegex": "^(?=.{8,16})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f50176c989b02",
        "type": "home",
        "name": "Progressive",
        "sequence": 2,
        "websiteURL": "https://www.progressive.com/",
        "backgroundColor": "#044393",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/progressive.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b2e",
        "type": "home",
        "name": "Allstate",
        "sequence": 3,
        "websiteURL": null,
        "backgroundColor": "#243c94",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/allstate.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b52",
        "type": "home",
        "name": "State Farm Insurance",
        "sequence": 3,
        "websiteURL": null,
        "backgroundColor": "#e42c2c",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/state-farm.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b26",
        "type": "home",
        "name": "Travellers",
        "sequence": 4,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/travellers.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b22",
        "type": "home",
        "name": "AIG",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b1e",
        "type": "home",
        "name": "American Family Insurance",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b32",
        "type": "home",
        "name": "Auto-Owners Insurance",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b4e",
        "type": "home",
        "name": "Chubb",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b2a",
        "type": "home",
        "name": "Citizens Property Insurance Corporation",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b4a",
        "type": "home",
        "name": "Erie Insurance",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b3a",
        "type": "home",
        "name": "Farmers Insurance",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#e41c34",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/dish-network.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b3e",
        "type": "home",
        "name": "Liberty Mutual",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#646565",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/liberty-mutual.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b46",
        "type": "home",
        "name": "Metlife",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b42",
        "type": "home",
        "name": "Nationwide",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#244c9c",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/nationwide.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b5a",
        "type": "home",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b56",
        "type": "home",
        "name": "The Hartford",
        "sequence": 10,
        "websiteURL": null,
        "backgroundColor": "",
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b36",
        "type": "home",
        "name": "USAA",
        "sequence": 5,
        "websiteURL": null,
        "backgroundColor": "#043c64",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/usaa.png"
      }
    ],
    homePhone: [
      {
        "_id": "5af9a9019b1f40176c989b66",
        "type": "homePhone",
        "name": "Comcast",
        "sequence": 1,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/comcast.png",
        "passwordRegex": "^(?=.{8,128})(?=.*[a-z])(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989bc6",
        "type": "homePhone",
        "name": "Spectrum",
        "sequence": 2,
        "websiteURL": "https://www.spectrum.com/",
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/charter-spectrum.png",
        "passwordRegex": "^(?=.{6,40})(?!.*[ ]).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989b6a",
        "type": "homePhone",
        "name": "AT&T",
        "sequence": 3,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/atnt.png",
        "passwordRegex": "^(?=.{6,24})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
      {
        "_id": "5af9a9019b1f40176c989b6e",
        "type": "homePhone",
        "name": "Verizon",
        "sequence": 4,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/verizon.png",
        "passwordRegex": "^(?=.{8,30})(?=.*[a-z])(?!.*[ ])(?=.*\\d).+$"
      },
  
      {
        "_id": "5cbedf7917f7945a3a01bf25",
        "type": "homePhone",
        "name": "Cox Communications",
        "sequence": 10,
        "scraperAvailable": true,
        "passwordRegex": "^(?=.{8,24})(?=.*[a-z])(?!.*[ ])(?=.*[A-Z])(?=.*\\d).+$"
      },
      {
        "_id": "5cbedf7917f7945a3a01bf28",
        "type": "homePhone",
        "name": "Frontier Communications",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf2b",
        "type": "homePhone",
        "name": "Google Fiber",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf2d",
        "type": "homePhone",
        "name": "Mediacom",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5cbedf7917f7945a3a01bf2e",
        "type": "homePhone",
        "name": "Midcontinent Communications",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b92",
        "type": "homePhone",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b76",
        "type": "homePhone",
        "name": "Sprint",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/sprint.png",
        "passwordRegex": "^(?=.{6,33})(?=.*[a-z])(?!.*[ ])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      },
      {
        "_id": "5cbedf7917f7945a3a01bf33",
        "type": "homePhone",
        "name": "Suddenlink",
        "sequence": 10,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989bca",
        "type": "homePhone",
        "name": "Vonage",
        "sequence": 5,
        "websiteURL": "",
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/vonage.png"
      },
      {
        "_id": "5cbedf7917f7945a3a01bf30",
        "type": "homePhone",
        "name": "Optimum",
        "sequence": 10,
        "websiteURL": null,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/optimum.png",
        "scraperAvailable": true
      }
    ],
    homeSecurity: [
      {
        "_id": "5af9a9019b1f40176c989b7a",
        "type": "homeSecurity",
        "name": "ADT",
        "sequence": 1,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/adt.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b7e",
        "type": "homeSecurity",
        "name": "Frontpoint",
        "sequence": 2,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/frontpoint.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b82",
        "type": "homeSecurity",
        "name": "Link",
        "sequence": 3,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/link-interactive.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b8a",
        "type": "homeSecurity",
        "name": "Vivint",
        "sequence": 4,
        "websiteURL": null,
        "scraperAvailable": true,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/vivint.png"
      },
      {
        "_id": "5af9a9019b1f40176c989b8e",
        "type": "homeSecurity",
        "name": "Other",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false
      },
      {
        "_id": "5af9a9019b1f40176c989b86",
        "type": "homeSecurity",
        "name": "Protect America",
        "sequence": 10,
        "websiteURL": null,
        "scraperAvailable": false,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/protect-america.png"
      },
      {
        "_id": "5cbef4f317f7945a3a01bfa8",
        "type": "homeSecurity",
        "name": "Optimum",
        "sequence": 10,
        "websiteURL": null,
        "logoURL": "https://s3.amazonaws.com/billtrim-prod-customer/assets/images/providers/optimum.png",
        "scraperAvailable": true
      }
    ]
  };

  bills:any = [{
    name:"Add cable bill",
    icon: "../assets/images/icons/icon-bill-cable.svg",
    type:"cable",
    open:true,
    complete:false
  },
  {
    name:"Add internet bill",
    icon: "../assets/images/icons/icon-bill-internet.svg",
    type:"internet",
    open:false,
    complete:false
  },
  {
    name:"Add cellphone bill",
    icon: "../assets/images/icons/icon-bill-cellphone.svg",
    type:"cellphone",
    open:false,
    complete:false
  },
  {
    name:"Add electricity bill",
    icon: "../assets/images/icons/icon-bill-electricity.svg",
    type:"electricity",
    open:false,
    complete:false
  },
  {
    name:"Add auto bill",
    icon: "../assets/images/icons/icon-bill-auto.svg",
    open:false,
    type:"auto",
    complete:false
  },
  {
    name:"Add home bill",
    icon: "../assets/images/icons/icon-bill-home.svg",
    type:"home",
    open:false,
    complete:false
  },
  {
    name:"Add homePhone bill",
    icon: "../assets/images/icons/icon-bill-home-phone.svg",
    type:"homePhone",
    open:false,
    complete:false
  },
  {
    name:"Add homeSecurity bill",
    icon: "../assets/images/icons/icon-bill-home-security.svg",
    type:"homeSecurity",
    open:false,
    complete:false
  }]
  
  constructor(private router: Router) { }

  updateBill(currBill:any) {
    let findIndex = this.bills.findIndex((bill:any) => bill.type === currBill.type)
    if(findIndex != -1){
      this.bills[findIndex].open = false;
      if(this.bills[findIndex + 1]) {
        this.bills[findIndex + 1].open = true;
      } else {
        this.router.navigate(['/finish'])
      }
    }
  }

  toggleBill(currBill:any) {
    let findIndex = this.bills.findIndex((bill:any) => bill.type === currBill.type)
    if(findIndex != -1){
      this.bills[findIndex].open = !this.bills[findIndex].open
    }
  }
}
