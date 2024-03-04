import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataService, DataServiceBrowser } from './data.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: DataService,
      useClass: DataServiceBrowser
    },
    {
      provide: APP_INITIALIZER,
      deps: [DataService],
      useFactory: (ds: DataService) => async () => await ds.load(),
      multi: true
    },
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp()),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
    )
  ]
};

