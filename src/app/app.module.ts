import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'projects/lem/auth/src/public_api';
import { AuthConfig } from 'projects/lem/auth/src/lib/auth.config';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule
    ],
    providers: [{
        provide: AuthConfig, useValue: environment
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
