import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MenuMobileItemsComponent} from './menu-mobile-items/menu-mobile-items.component';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuMobileItemsComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
