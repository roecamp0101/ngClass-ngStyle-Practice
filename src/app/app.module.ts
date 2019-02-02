import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { InfoComponent } from './info/info.component';
import { SingersComponent } from './singers/singers.component';
import { ModulesComponent } from './modules/modules.component';
import { FilterPipe } from './modules/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    InfoComponent,
    SingersComponent,
    ModulesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
