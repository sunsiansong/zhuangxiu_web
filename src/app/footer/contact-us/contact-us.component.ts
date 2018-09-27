import { Component, OnInit } from '@angular/core';


type contactChannel = 'QQ' | '微信' | '电话' | '邮件';
type intentionType = '商务合作' | '业务咨询' | '招聘求职' | '售后服务' | '其他';

export class ContactInfo {
  intentionType: intentionType;
  channelType: contactChannel;
  channelVal: string;
  description: string;
  contactTime: string;
}

export const PRESET_CONTACT_TIME = ['任何时间', '工作日', '尽快联系'];


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  info: ContactInfo = {
    intentionType: '业务咨询',
    channelType: '电话',
    channelVal: '',
    description: '',
    contactTime: '工作日'
  };

  constructor() { }

  ngOnInit() {
  }

  contactTimeChange() {
    console.log('contactTimeChange');
  }
}
