import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ConfigService } from './app/services/config.service';

if (environment.production) {
  enableProdMode();
}

ConfigService.set('api', 'http://127.0.0.1:3000/api/lib');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
