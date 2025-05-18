import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    // Provide the Router for routing functionality
    provideRouter(routes),
    
    // Provide HttpClientModule for making HTTP requests
    provideHttpClient(),
    
    // Additional app configurations
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
