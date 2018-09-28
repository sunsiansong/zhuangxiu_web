import { Subject } from "rxjs";

describe("测试rxjs subject的使用", () => {
  it("no assert", () => {
    const subj = new Subject();
    subj.subscribe(x => {
      // console.log("sub:", x);
    });

    subj.next("233");
    subj.next("666");

    expect(true).toBeTruthy();
  });
});
