import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

export class MatPaginatorIntlService implements MatPaginatorIntl {
  changes: Subject<void> = new Subject<void>();
  itemsPerPageLabel = '每页显示/条';
  nextPageLabel = '下一页';
  previousPageLabel = '上一页';
  firstPageLabel = '首页';
  lastPageLabel = '末页';

  /**
   * copied from : https://github.com/angular/material2/blob/master/src/lib/paginator/paginator-intl.ts
   */
  getRangeLabel: (page: number, pageSize: number, length: number) => string  = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 of ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} / ${length}`;
  }

  constructor() { }
}
