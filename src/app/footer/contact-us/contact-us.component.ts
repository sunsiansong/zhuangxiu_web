import { Component, Inject, OnInit } from "@angular/core";

import * as moment from 'moment';
import { MatSnackBar } from "@angular/material";

import { PageDataService, Config, ContactInfo } from '@local/frontend-api-spec';
import { DATA_SERVICE } from "../../const.instance";
import { ClipboardService } from "ngx-clipboard";

declare const AMap: any;

const INTENTION_TYPES = [
  "商务合作",
  "业务咨询",
  "招聘求职",
  "售后服务",
  "其他"
];
const CONTACT_TIME = ["任何时间", "工作日", "休息日", "尽快联系", "其他"];
const CONTACT_CHANNELS = ["QQ", "微信", "电话", "邮件", "其他"];

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  preset = {
    INTENTION_TYPES,
    CONTACT_TIME,
    CONTACT_CHANNELS
  };

  configs: { [key: string]: Config } = {};

  info: ContactInfo = {
    intentionType: "业务咨询",
    channelType: "电话",
    channelVal: "",
    description: "",
    contactTime: "工作日"
  };

  constructor(
    @Inject(DATA_SERVICE) private dataService: PageDataService,
    private snackBar: MatSnackBar,
    private _clipboardService: ClipboardService
  ) {}

  ngOnInit() {
    this.dataService
      .configs()
      .subscribe(
        res => {
          this.configs = res;
          const geoArr = this.configs.addressGeo.val.split(',').map(x => parseFloat(x));
          this.initAddressAmap(geoArr[0], geoArr[1]);
        },
        err => alert("failed to fetch configs"),
        () => console.log("contact comp fetch data done")
      );

  }

  copyContactInfo() {
    this._clipboardService.copyFromContent(`
「公司地址」
      ${this.configs.address.val}
「公共交通」
      ${this.configs.publicTransport.val}
「联系电话和邮箱」
      ${this.configs.contact.val}
「微信公众号」
      ${this.configs.weixin.val}

${this.configs.contactTxt.val}
喵～卖个萌(o_o) 「请务必了解到，作者已经是中年大叔了，卖萌什么的，不要误会」

「From」 ${document.location.href}

「At」  ${moment(new Date).format('YYYY/MM/DD HH:mm')}
    `);
    this.snackBar.open("联系信息已经复制到粘贴板了，试试吧(^｡^)", "嗯,知道了", {
      duration: 3000
    });
  }

  submitContactInfo() {
    // TODO data validate
    this.dataService.submitContactInfo(this.info)
      .subscribe(x => {
        this.snackBar.open('好的，您的请求我们已经收到，等我们老板不忙了我叫他联系你', '静候佳音', {duration: 3000});
      }, err => {
        const ref = this.snackBar.open('提交请求失败，请稍后尝试', '立即重试', {duration: 5000}); // TODO 调整失败样式，处理成统一风格的报错提醒
        ref.onAction().subscribe(() => {
          this.submitContactInfo();
        });
      });
  }

  initAddressAmap(lat: number, lng: number) {
    // TODO 改为异步加载地图，否则SSR报错。
    const map = new AMap.Map("addressAmap", {
      zoom: 11, // 级别
      center: [lat, lng], // 中心点坐标
      // viewMode: "3D" // 使用3D视图, 注意不要使用这个配置，这个配置会导致页面CPU占用过多，持续卡顿（开发模式下）
    });

    const marker = new AMap.Marker({
      icon:
        "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      position: [lat, lng],
      offset: new AMap.Pixel(-13, -30)
    });
    marker.setMap(map);
  }

  get descriptionPlaceholder() {
    return "您要装修房子吗？想要什么样的风格，大概什么户型，有任何想法请告诉我们";
  }
}
