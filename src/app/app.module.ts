import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { ComponentModule } from './components/components.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }
