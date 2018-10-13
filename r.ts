import { Observable, Observer, of, from, interval } from "rxjs";
// tslint:disable-next-line:import-blacklist
import { delay, map, take, mapTo } from "rxjs/operators";

of(1, 2, 5)
    .pipe(
        map( x => 'HI ' + x),
        take(2)
    )
    .subscribe(x => console.log(x));
