import { InjectionToken } from "@angular/core";

import { PageDataService } from '@local/frontend-api-spec';

export let DATA_SERVICE = new InjectionToken<PageDataService>('dataService');
