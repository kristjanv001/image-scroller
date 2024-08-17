import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { InMemoryDataService } from "./services/in-memory-data.service";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
  ],
};
