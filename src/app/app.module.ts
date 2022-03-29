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
import { SingleGridComponent } from './single-grid/single-grid.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ManageComponentComponent } from './manage-component/manage-component.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { SortableModule } from '@progress/kendo-angular-sortable';








@NgModule({
  declarations: [
    AppComponent,
    SovItemDescriptionComponent,
    SovItemGridComponent,
    SovComponent,
    MouseWheelScrollDirective,
    SingleGridComponent,
    MenuBarComponent,
    ManageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    DialogsModule,
    InputsModule,
    LayoutModule,
    ListViewModule,
    SortableModule
  ],
  providers: [
    {provide:sovPanelHeaderListToken,useValue:sovPanelHeaderList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
