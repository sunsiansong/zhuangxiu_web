"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// tslint:disable-next-line:import-blacklist
var operators_1 = require("rxjs/operators");
rxjs_1.of(1, 2, 5)
    .pipe(operators_1.map(function (x) { return 'HI ' + x; }), operators_1.take(2))
    .subscribe(function (x) { return console.log(x); });
