import { environment } from "../../../environments/environment";

export class Fn {
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * 瓷砖计算，将数据拆成几列,总的来说分成n列，数据均分到每一列，理论上建议的数据量为列数的整数倍，从上到下，从左往右
   * @param cols 一共多少列
   * @param contents 需要分列的数据
   */
  static calcTile<T>(cols: number, contents: T[]): T[][] {
    const numPerColumn = contents.length / cols;

    const tiles = [];
    contents.forEach(val => {
      if (
        tiles.length === 0 ||
        tiles[tiles.length - 1].length >= numPerColumn
      ) {
        // 当前列不存在或者当列已满
        tiles.push([]);
      }
      tiles[tiles.length - 1].push(val);
    });
    return tiles;
  }

  /**
   * 计算 html 子元素的高度和
   * @param ele html元素
   */
  static calcElementChildrenHeight(ele: Element): number {
    let sum = 0;
    for (let i = 0; i < ele.children.length; i++) {
      sum += ele.children.item(i).clientHeight;
    }
    return sum;
    // return new Array(ele.children.length)
    //   .fill(null)
    //   .map((_, i) => {
    //     return ele.children.item(i).clientHeight;
    //   })
    //   .reduce((pre, curr) => {
    //     return pre + curr;
    //   }, 0);
  }

  static done(): void {
    console.log('done');
    if (environment.production) {
      console.error('should not appear');
    }
  }
}

