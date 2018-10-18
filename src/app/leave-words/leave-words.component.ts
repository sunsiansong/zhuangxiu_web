import { Component, OnInit } from "@angular/core";
import { MOCK_VISITOR_LEAVE_WORDS } from "../../test/example.data";
import { Fn } from "../common/utils/fn.util";
import { VisitorLeaveWords } from "@local/frontend-api-spec";

export interface Tile {
  color: { bg: string; fg: string };
  cols: number;
  rows: number;
  words: VisitorLeaveWords;
}

const COLORS: { bg: string; fg: string }[] = [
  { bg: "lightblue", fg: "black" },
  { bg: "lightgreen", fg: "black" },
  { bg: "lightpink", fg: "black" },
  { bg: "#DDBDF1", fg: "black" },
  { bg: "lightyellow", fg: "black" },
  { bg: "lightgray", fg: "black" },
  { bg: "black", fg: "white" }
];

@Component({
  selector: "app-leave-words",
  templateUrl: "./leave-words.component.html",
  styleUrls: ["./leave-words.component.scss"]
})
export class LeaveWordsComponent implements OnInit {
  state: {
    datas: VisitorLeaveWords[],
    now: Date
  } = {
    datas: [],
    now: new Date
  };

  tiles: Tile[] = [];

  constructor() {}

  ngOnInit() {
    this.genTiles();
  }

  reset() {
    this.tiles = [];
  }

  genTiles() {
    const p = MOCK_VISITOR_LEAVE_WORDS.sort((a, b) => {
      return Fn.getRandomInt(3) % 2 > 0 ? 1 : -1;
    });
    // console.log(p);
    this.tiles = this.tiles.concat(this.toTiles(p));
    // console.log('tiles', this.tiles);
  }


  /**
   * 生成留言墙瓷砖
   * 基于length判断
   *  - 小于12的给1x1
   *  - 12-24的1x2 或者 2x1
   *  - 25-36 的 1x3 或 3x1
   *  - 37 以上的 4x1/1x4,多出的内容overflow auto (x/y)
   *
   * 重要：避免出现空白瓷砖
   *
   *  todo: 考虑避免连续大面积同质化
   * @param words 留言[]
   * @returns 合理布局的瓷砖[]
   */
  private toTiles(words: VisitorLeaveWords[]): Tile[] {
    let currentRowColsCount = 0;
    return words.map(x => {
      const len = x.content.length;
      let idx = Math.floor(len / 12);
      if (idx > 3) {
        idx = 3;
      }
      // console.log('len:', len, '  idx:', idx);
      const s = TILE_SIZES[idx];
      let cols;
      let rows;
      if (currentRowColsCount + s.h.c > COLS_PER_ROW) {
        cols = s.v.c;
        rows = s.v.r;
      } else {
        cols = s.h.c;
        rows = s.h.r;
      }
      currentRowColsCount = (currentRowColsCount + cols) % COLS_PER_ROW;
      return {
        cols,
        rows,
        color: COLORS[Fn.getRandomInt(COLORS.length)],
        words: x
      };
    });
  }
}

const COLS_PER_ROW = 4;
const TILE_SIZES: TileSize[] = [
  {h: {c: 1, r: 1}, v: {c: 1, r: 1}},
  {h: {c: 2, r: 1}, v: {c: 1, r: 2}},
  {h: {c: 3, r: 1}, v: {c: 1, r: 3}},
  {h: {c: 4, r: 1}, v: {c: 1, r: 4}},
];
interface TileSize {
  h: { c: number, r: number }; // 水平
  v: { c: number, r: number }; // 垂直
}
