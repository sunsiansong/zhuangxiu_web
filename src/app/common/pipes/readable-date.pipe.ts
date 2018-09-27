import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

export const TEXT = {
  justNow: '刚刚',
  minutesAgo: '分钟前',
  hoursAgo: '小时前',
  // yesterday: '昨天',
  // theDayBeforeYesterday: '前天',
  daysAgo: '天前'
};
export const ERR_TEXT = {
  notSupported: '[无法转换时间,不支持的参数]',
  futureDate: '[未来的时间]',
};

/**
 * 日期转换管道，将日期转换为更易读的内容，例如：
 *
 * 刚刚（1分钟内），
 * 5分钟前（1-59分钟），
 * 5小时前（1-23小时），
 * 3天前（1-5天）
 * 18/9/23（6天前）
 *
 * 建议的改善：
 *  - 1-3天这个时间段内精确度存在模糊，建议调整位 天+小时 的展示方式，eg：2天5小时前
 *  - 1年内的时间可以不显示年份
 */
@Pipe({
  name: 'readableDate'
})
export class ReadableDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return ERR_TEXT.notSupported;
    }

    const d: moment.Moment = moment(value);
    const now: moment.Moment = moment(args[0] || new Date);

    if (d.isAfter(now)) {
      return ERR_TEXT.futureDate;
    }

    if (now.diff(d, 'seconds') < 60) {
      return TEXT.justNow;
    }

    const diffMinutes = now.diff(d, 'minutes');
    if (diffMinutes < 60) {
      return `${diffMinutes}${TEXT.minutesAgo}`;
    }

    const diffHours = now.diff(d, 'hours');
    if (diffHours < 24) {
      return `${diffHours}${TEXT.hoursAgo}`;
    }

    const diffDays = now.diff(d, 'days');
    if (diffDays < 6) {
      return `${diffDays}${TEXT.daysAgo}`;
    } else {
      return d.format('YY/MM/DD HH:mm');
    }
  }

}
