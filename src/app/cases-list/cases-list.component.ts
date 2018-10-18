import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Observable, Observer, of, from, interval } from "rxjs";
import { delay, map, take } from "rxjs/operators";

import { SortDirection, PageEvent } from "@angular/material";

import { PageDataService, PageData, Case, CasesCompData } from '@local/frontend-api-spec';
import { DATA_SERVICE } from "../const.instance";
import { Fn } from "../common/utils/fn.util";

export interface ExampleTab {
  label: string;
  content: string;
}

export interface CasesCompState {
  style?: string;
  sort?: string;
  sortDirection?: SortDirection;
}

/**
 * 瀑布流设想：
 *  有n列数据，数据逐条放入当前最短的列
 */
@Component({
  selector: "app-cases-list",
  templateUrl: "./cases-list.component.html",
  styleUrls: ["./cases-list.component.scss"]
})
export class CasesListComponent implements OnInit {
  @ViewChild("colContainer")
  colContainer: ElementRef;

  asyncStyles: Observable<ExampleTab[]>;
  state: CasesCompState = {
    sort: "default",
    sortDirection: "desc"
  };

  data: CasesCompData;
  pageEvent: PageEvent; // MatPaginator Output

  cols = 3;
  tiles: Case[][];
  asyncTest = interval(1000).pipe(map(x => x + "TEXT"));


  constructor(@Inject(DATA_SERVICE) private pageDataService: PageDataService) {
    this.asyncStyles = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: "所有风格", content: "Content 1" },
          { label: "新中式", content: "Content 2" },
          { label: "中式", content: "Content 3" },
          { label: "日式", content: "Content 3" },
          { label: "简欧", content: "Content 3" },
          { label: "美式", content: "Content 3" }
        ]);
      }, 100);
    });
  }

  ngOnInit() {
    this.loadMoreData();
  }

  pageChange(e: PageEvent) {
    console.log("pageChange", e);
  }

  sortChange(e: any) {
    console.log("sort change", e);
  }

  loadMoreData() {
    this.pageDataService.casesListData().subscribe(
      res => {
        this.data = res;
        // this.data.tiles = Fn.calcTile(3, this.data.page.datas);

        if (!this.tiles) {
          this.tiles = Fn.calcTile(3, this.data.page.datas);
        } else {
          // 1 2 3 4
          // 400 > 200 > 100 > 0
          interval(200)
            .pipe(
              // map(x => x / 2 >= 100 ? x / 2 : 0)
              map(x => res.page.datas[x]),
              take(res.page.datas.length)
            )
          // from(res.page.datas)
            .subscribe(x => {
              const ele: HTMLElement = this.colContainer.nativeElement;
              const appendColIndex = new Array(ele.children.length)
                .fill(null)
                .map((_, index) => {
                  return {
                    node: ele.children.item(index),
                    index
                  };
                })
                .reduce((pre, curr) => {
                  return Fn.calcElementChildrenHeight(pre.node) >
                    Fn.calcElementChildrenHeight(curr.node)
                    ? curr
                    : pre;
                }).index;

              this.tiles[appendColIndex].push(x);
            });
        }
      },
      err => {
        alert("failed to fetch casesListData");
      },
      () => {
        console.log("fetch cases list data done");
      }
    );
  }

  get colWidth() {
    return 100 / this.tiles.length + "%";
  }
}
