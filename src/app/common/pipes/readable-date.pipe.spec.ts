import { ReadableDatePipe, TEXT, ERR_TEXT } from './readable-date.pipe';

import * as moment from 'moment';

function momentAdd2Date(n: moment.DurationInputArg1, u: moment.DurationInputArg2): Date {
  return moment().add(n, u).toDate();
}

describe('ReadableDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ReadableDatePipe();
    expect(pipe).toBeTruthy();

    // console.log('moment test:', moment());
    // console.log('mmt date:', moment(new Date));
    // console.error('mmt diff seconds:', moment().diff(moment().add(5, 'seconds'), 'seconds'));

    const now = new Date;
    const text = TEXT;

    const cases: {d: Date, result: string}[] = [
      // 刚刚 0#
      { d: momentAdd2Date(-5, 's'), result: text.justNow },
      { d: momentAdd2Date(-6, 's'), result: text.justNow },
      { d: momentAdd2Date(-59, 's'), result: text.justNow },
      // 1-59分钟内 3#
      { d: momentAdd2Date(-61, 's'), result: `1${text.minutesAgo}` },
      { d: momentAdd2Date(-320, 's'), result: `5${text.minutesAgo}` },
      { d: momentAdd2Date(-6, 'm'), result: `6${text.minutesAgo}` },
      { d: momentAdd2Date(-59, 'm'), result: `59${text.minutesAgo}` },
      // 1-23小时内 7#
      {d: momentAdd2Date(-2, 'h'), result: `2${text.hoursAgo}`},
      {d: momentAdd2Date(-4, 'h'), result: `4${text.hoursAgo}`},
      {d: momentAdd2Date(-23, 'h'), result: `23${text.hoursAgo}`},
      // 1-5天 10#
      {d: momentAdd2Date(-24, 'h'), result: `1${text.daysAgo}`},
      {d: momentAdd2Date(-28, 'h'), result: `1${text.daysAgo}`},
      {d: momentAdd2Date(-47, 'h'), result: `1${text.daysAgo}`},
      {d: momentAdd2Date(-49, 'h'), result: `2${text.daysAgo}`},
      {d: momentAdd2Date(-52, 'h'), result: `2${text.daysAgo}`},
      // 15#
      {d: momentAdd2Date(-71, 'h'), result: `2${text.daysAgo}`},
      {d: momentAdd2Date(-3, 'd'), result: `3${text.daysAgo}`},
      {d: momentAdd2Date(-4, 'd'), result: `4${text.daysAgo}`},
      {d: momentAdd2Date(-5, 'd'), result: `5${text.daysAgo}`},
      {d: moment().add(-3, 'd').add(-5, 'm').toDate(), result: `3${text.daysAgo}`},
      // 格式化 todo
      {d: moment([2018, 7, 25, 15, 55]).toDate(), result: '18/08/25 15:55'}
    ];

    cases.forEach((c, i) => {
      const f = 'YY/MM/DD HH:mm:ss';
      const t = i + '# ' + moment(c.d).format(f) + ' >> ' + moment(now).format(f) + ' ';
      expect(t + pipe.transform(c.d, now)).toBe(t + c.result);
    });

  });
});
