import { Component, Inject, OnInit } from "@angular/core";
import { PageDataService } from "../../service/page-data.service";
import { Config } from "../../common/model/config.model";
import { DATA_SERVICE } from "../../const.instance";
import { MatSnackBar } from "@angular/material";

export class ContactInfo {
  intentionType: string;
  channelType: string;
  channelVal: string;
  description: string;
  contactTime: string;
}

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
  styleUrls: ["./contact-us.component.css"]
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
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.dataService
      .configs()
      .subscribe(
        res => (this.configs = res),
        err => alert("failed to fetch configs"),
        () => console.log("contact comp fetch data done")
      );
  }

  copyContactInfo() {
    // TODO copy to clip board
    this.snackBar.open('text copied', 'ok', {
      duration: 3000
    });
  }

  get descriptionPlaceholder() {
    return '您要装修房子吗？想要什么样的风格，大概什么户型，有任何想法请告诉我们';
  }
}
