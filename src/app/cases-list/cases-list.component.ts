import { Component, OnInit } from "@angular/core";
import { Observable, Observer } from "rxjs";

import { SortDirection, PageEvent } from "@angular/material";

import { PageData } from "../common/model/page.model";
import { Case } from "../common/model/case.model";
import { PageDataService } from "../service/page-data.service";
import { MockPageDataService } from "../service/__mock__/page-data.service.mock";

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
  now?: Date;
}

@Component({
  selector: "app-cases-list",
  templateUrl: "./cases-list.component.html",
  styleUrls: ["./cases-list.component.css"]
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
  dataService = new MockPageDataService();

  pageChange(e: PageEvent) {
    console.log("pageChange", e);
  }

  // constructor(private dataService: PageDataService) {
  constructor() {
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
      }, 1000);
    });
  }

  ngOnInit() {
    this.dataService.casesListData().subscribe(
      res => {
        this.data = res;
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
