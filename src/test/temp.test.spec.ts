import { Subject, of } from "rxjs";
import { mapTo, delay, map } from 'rxjs/operators';

describe("测试rxjs subject的使用", () => {
  test.skip("no assert", () => {
    const subj = new Subject();
    subj.subscribe(x => {
      // console.log("sub:", x);
    });

    subj.next("233");
    subj.next("666");

    expect(true).toBeTruthy();
  });

  it("test operators", () => {
    of(1, 2, 4)
    // .pipe(delay(1000))
    .pipe(map(x => x + 'map'), delay(1000))
    .subscribe(x => console.log(x));
  });
});
