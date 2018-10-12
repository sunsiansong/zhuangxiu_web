import { Component, OnInit, Inject } from "@angular/core";
import { Observable, Observer } from "rxjs";

import { SortDirection, PageEvent } from "@angular/material";

import { PageData } from "../common/model/page.model";
import { Case } from "../common/model/case.model";
import { PageDataService } from "../service/page-data.service";
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

export interface CasesCompData {
  page?: PageData<Case>;
  tiles?: Case[][];
  now?: Date;
}

@Component({
  selector: "app-cases-list",
  templateUrl: "./cases-list.component.html",
  styleUrls: ["./cases-list.component.scss"]
})
export class CasesListComponent implements OnInit {
  asyncStyles: Observable<ExampleTab[]>;
  state: CasesCompState = {
    sort: "default",
    sortDirection: "desc"
  };

  data: CasesCompData;
  // MatPaginator Output
  pageEvent: PageEvent;

  tileCols = 3;
  tiles: Case[][];

  pageChange(e: PageEvent) {
    console.log("pageChange", e);
  }

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
    this.pageDataService.casesListData().subscribe(
      res => {
        this.data = res;
        this.data.tiles = Fn.calcTile(3, this.data.page.datas);
      },
      err => {
        alert("failed to fetch casesListData");
      },
      () => {
        // console.log("fetch cases list data done");
      }
    );
  }

  sortChange(e: any) {
    console.log("sort change", e);
  }
}
