import { Component, OnInit } from '@angular/core';


export class ContactInfo {
  intentionType: string;
  channelType: string;
  channelVal: string;
  description: string;
  contactTime: string;
}

const INTENTION_TYPES = ['商务合作' , '业务咨询' , '招聘求职' , '售后服务' , '其他'];
const CONTACT_TIME = ['任何时间', '工作日', '休息日', '尽快联系', '其他(在说明里备注)'];
const CONTACT_CHANNELS = ['QQ' , '微信' , '电话' , '邮件', '其他'];

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  preset = {
    INTENTION_TYPES, CONTACT_TIME, CONTACT_CHANNELS
  };

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

}
