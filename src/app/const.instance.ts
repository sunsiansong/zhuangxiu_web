import { InjectionToken } from "@angular/core";

import { PageDataService } from "./service/page-data.service";

export let DATA_SERVICE = new InjectionToken<PageDataService>('dataService');
