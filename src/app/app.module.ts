import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SovItemDescriptionComponent } from './sov-item-description/sov-item-description.component';
import { SovItemGridComponent } from './sov-item-grid/sov-item-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SovComponent } from './sov/sov.component';
import { MouseWheelScrollDirective } from './mouse-wheel-scroll.directive';
import { sovPanelHeaderList, sovPanelHeaderListToken } from './providers';



@NgModule({
  declarations: [
    AppComponent,
    SovItemDescriptionComponent,
    SovItemGridComponent,
    SovComponent,
    MouseWheelScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:sovPanelHeaderListToken,useValue:sovPanelHeaderList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
